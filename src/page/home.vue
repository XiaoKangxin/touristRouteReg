<template>
  <div>
    <div class="home-main">
        <div class="tour-route" @click="toList('myTour')">
            <img src="/static/images/tour-route-bg.png" alt="">
        </div>
        <div class="my-tour-route mgT40" @click="toList('tourList')">
            <img src="/static/images/my-tour-route.png" alt="">
        </div>
    </div>
    <div class="home-footer">
        <img class="flL" src="/static/images/home-footer.png" alt="">
        <p class="clear"></p>
    </div>
  </div>
</template>

<script>
import { XInput } from 'vux'
export default {
  name: 'login',
  components: {
    XInput
  },
  data () {
    return {
    }
  },
  methods: {
    toList (path) {
      this.$router.push({path: `/list/${path}`})
    }
  }
}
</script>
