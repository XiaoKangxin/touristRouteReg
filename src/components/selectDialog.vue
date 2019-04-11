<template>
  <div v-transfer-dom>
    <x-dialog v-model="showSelectDialog" class="select-dialog">
      <div class="close-box" @click="closeDialog">
        <span class="close-icon"></span>
      </div>
      <header>
        <img src="/static/images/select-head.png" alt>
      </header>
      <div class="select-list">
        <ul>
          <li v-for="(item,index) in selectList" :key="index" @click="selectTour(index)">
            <div class="flL message ftS28 textL default-text lh36">
              <p class="ft700">
                A{{index + 1}}线：
                <span class="applied-btn h38" v-show="item.applied">已报名</span>
              </p>
              <p class="pdT10">2019年9月25日-9月30日</p>
              <p class="ftS26 gray-text">共5天 / 剩余10人</p>
            </div>
            <div class="select-state flL">
              <i class="gray-select flL" :class="{'checked':selectIndex==index}"></i>
            </div>
            <p class="clear"></p>
          </li>
        </ul>
      </div>
      <footer>
        <span class="time-down flL">16天20时30分20秒结束</span>
        <span class="yellow-btn h90 flR">开始抢报</span>
        <p class="clear"></p>
      </footer>
    </x-dialog>
  </div>
</template>

<script>
import { XDialog, TransferDomDirective as TransferDom } from 'vux'
export default {
  name: 'selectDialog',
  directives: {
    TransferDom
  },
  components: {
    XDialog
  },
  props: ['showSelectDialog'],
  data () {
    return {
      selectList: [{ applied: false }, { applied: true }, { applied: false }, { applied: false }, { applied: false }, { applied: false }],
      selectIndex: ''
    }
  },
  methods: {
    selectTour (index) {
      this.selectIndex = index
    },
    closeDialog () {
      this.$emit('closeDialog', false)
    }

  },
  created () {
    for (let i = 0; i < this.selectList.length; i++) {
      if (this.selectList[i].applied === true) {
        this.selectIndex = i
        return false
      }
    }
  }
}
</script>
