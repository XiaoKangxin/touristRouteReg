<template>
  <div class="list-page">
    <tab :line-width="2" custom-bar-width="60px">
        <tab-item :selected="selectNav=='tourList'" @on-item-click="onItemClick">抢报路线</tab-item>
        <tab-item :selected="selectNav=='myTour'" @on-item-click="onItemClick">我的路线</tab-item>
    </tab>
    <div class="mgT15 list-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
import tourList from '@/page/tourList'
export default {
  name: 'list',
  components: {
    Tab,
    TabItem,
    tourList
  },
  data () {
    return {
      selectNav: '/list/myTour'
    }
  },
  methods: {
    onItemClick (index) {
      this.selectNav = index
      if (index === 0) {
        this.$router.push({path: `/list/tourList`})
      } else {
        this.$router.push({path: `/list/myTour`})
      }
    }
  },
  created () {
    this.selectNav = this.$route.name
    console.log(this.$route)
  }
}
</script>
