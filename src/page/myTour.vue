<template>
    <div class="tour-list hp100">
        <ul>
            <li class="tour-item mgT0" v-for='(item , index) in myList' :key=index>
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
</template>

<script>
export default {
  name: 'list',
  components: {
  },
  data () {
    return {
      selectNav: 0,
      myList: [
        {
          banner: require('../../static/images/tour-bg.png'),
          tourName: '台湾',
          price: 4000,
          applied: true
        }
      ]
    }
  },
  methods: {
  },
  created () {
  }
}
</script>
