<template>
  <div class="hp100" style="background: #fff;">
    <div class="tour-list">
      <header :class="tourType"></header>
      <div class="tour-list-main">
        <p class="hint-title">
          <i class="bulb-icon"></i>
          <span>{{tourType=='better-title'?'适用所有人':'截止2019财年底入职满一年及以上员工可选，2018.5.31日前入职的员工。'}}</span>
        </p>
        <div class="mgT15">
          <div class="tour-item">
            <img :src="detail.banner" alt>
            <div class="message">
              <span class="flL default-text">{{detail.tourName}}￥{{detail.price}}</span>
              <p class="clear"></p>
            </div>
            <span class="applied-btn" v-if="detail.applied">已报名</span>
          </div>
        </div>
      </div>
    </div>
    <div class="detial-pdf-box">
      <p class="detial-title">
        <i></i>
        <span>行程介绍</span>
      </p>
      <div>
        <pdf :url="detail.url"></pdf>
      </div>
    </div>
    <div class="detial-footer">
      <span class="time-down flL">16天20时30分20秒结束</span>
      <span class="yellow-btn h90 flR" @click="showSelectDialog=true">开始抢报</span>
      <p class="clear"></p>
    </div>
    <select-dialog :showSelectDialog='showSelectDialog' @closeDialog="closeDialog"></select-dialog>
  </div>
</template>

<script>
import pdf from '@/components/pdf'
import selectDialog from '@/components/selectDialog'
export default {
  name: 'tourDetail',
  components: {
    pdf,
    selectDialog
  },
  data () {
    return {
      tourType: 'better-title',
      detail: {
        banner: require('../../static/images/tour-bg.png'),
        tourName: '台湾',
        price: 4000,
        applied: false,
        url: '/static/D-欧洲法瑞德8日.pdf'
      },
      showSelectDialog: false
    }
  },
  methods: {
    closeDialog () {
      this.showSelectDialog = false
    }
  },
  created () {
    this.tourType = this.$route.query.type
  }
}
</script>
