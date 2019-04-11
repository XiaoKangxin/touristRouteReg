<template>
  <div>
    <div class="tour-list">
      <header class="better-title"></header>
      <div class="tour-list-main">
        <p class="hint-title"><i class="bulb-icon"></i><span>适用所有人</span></p>
        <ul class="mgT15">
          <li class="tour-item" v-for='(item , index) in betterList' :key=index @click="detail(item.id,'better-title')">
            <img :src="item.banner" alt="">
            <div class="message">
              <span class="flL default-text">{{item.tourName}}￥{{item.price}}</span>
              <x-icon class="flR" type="ios-arrow-right" size="20"></x-icon>
              <p class=clear></p>
            </div>
            <span class="applied-btn" v-if="item.applied">已报名</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="tour-list mgT15">
      <header class="bigger-title"></header>
      <div class="tour-list-main">
        <p class="hint-title"><i class="bulb-icon"></i><span>截止2019财年底入职满一年及以上员工可选，2018.5.31日前入职的员工。</span></p>
        <ul class="mgT15">
          <li class="tour-item" v-for='(item , index) in betterList' :key=index @click="detail(item.id,'bigger-title')">
            <img :src="item.banner" alt="">
            <div class="message">
              <span class="flL default-text">{{item.tourName}}￥{{item.price}}</span>
              <x-icon class="flR" type="ios-arrow-right" size="20"></x-icon>
              <p class=clear></p>
            </div>
            <span class="applied-btn" v-if="item.applied">已报名</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
export default {
  name: 'list',
  components: {
    Tab,
    TabItem
  },
  data () {
    return {
      selectNav: 0,
      betterList: [
        {
          banner: require('../../static/images/tour-bg.png'),
          tourName: '台湾',
          price: 4000,
          applied: true
        }, {
          banner: require('../../static/images/tour-bg.png'),
          tourName: '柬埔寨',
          price: 4000,
          applied: false
        }, {
          banner: require('../../static/images/tour-bg.png'),
          tourName: '日本',
          price: 4000,
          applied: false
        }
      ],
      biggerList: [
        {
          banner: require('../../static/images/tour-bg.png'),
          tourName: '俄罗斯',
          price: 8000,
          applied: true
        }, {
          banner: require('../../static/images/tour-bg.png'),
          tourName: '斯里兰卡',
          price: 8000,
          applied: false
        }, {
          banner: require('../../static/images/tour-bg.png'),
          tourName: '日本',
          price: 4000,
          applied: false
        }
      ]
    }
  },
  methods: {
    detail (id, type) {
      this.$router.push({path: '/list/tourDetail', query: {id: id, type: type}})
    }
  },
  created () {
  }
}
</script>
