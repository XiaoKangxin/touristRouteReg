<template>
  <div class="pdf-box">
    <loading :show="show" :text="text"></loading>
    <canvas v-for="page in pages" :id="'the-canvas'+page" :key="page"></canvas>
  </div>
</template>

<script>
import PDFJS from 'pdfjs-dist'
import { Loading } from 'vux'
export default {
  data () {
    return {
      title: '',
      pdfDoc: null,
      loadding: false,
      pages: 0,
      show: true,
      text: '加载中...'
    }
  },
  components: {
    Loading
  },
  props: {
    url: {
      type: String
    }
  },
  methods: {
    renderPage (num) {
      let _this = this
      this.pdfDoc.getPage(num).then(function (page) {
        let canvas = document.getElementById('the-canvas' + num)
        let ctx = canvas.getContext('2d')
        let dpr = window.devicePixelRatio || 1
        let bsr = ctx.webkitBackingStorePixelRatio ||
                  ctx.mozBackingStorePixelRatio ||
                  ctx.msBackingStorePixelRatio ||
                  ctx.oBackingStorePixelRatio ||
                  ctx.backingStorePixelRatio || 1
        let ratio = dpr / bsr
        var viewport = page.getViewport(screen.availWidth / page.getViewport(1).width)
        canvas.width = viewport.width * ratio
        canvas.height = viewport.height * ratio
        canvas.style.width = viewport.width + 'px'
        canvas.style.height = viewport.height + 'px'
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
        var renderContext = {
          canvasContext: ctx,
          viewport: viewport
        }
        page.render(renderContext)
        if (_this.pages > num) {
          _this.renderPage(num + 1)
        }
      })
    },
    loadFile (url) {
      let _this = this
      PDFJS.getDocument(url).then(function (pdf) {
        _this.pdfDoc = pdf
        _this.pages = _this.pdfDoc.numPages
        _this.$nextTick(() => {
          _this.renderPage(1)
          _this.show = false
        })
      })
    }
  },
  mounted () {
    this.loadFile(this.url)
  }
}
</script>

<style>
.pdf-box .weui-mask_transparent{
  display: none;
}
.pdf-box .weui-toast {
    position: relative;
    top: 0.64rem;
    background: none;
    color: #ababab;
    font-size: 0.64rem;
}
canvas {
  display: block;
  border-bottom: 1px solid #d4d4d4;
}
</style>
