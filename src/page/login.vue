<template>
  <div class="login-page">
    <div class="login-head">
        <img src="/static/images/login-head.png" alt="">
    </div>
    <div class="login-main">
        <div class="email-input psR">
            <x-input v-model="message.email" placeholder="请输入邮箱"></x-input>
        </div>
        <div class="password-input psR mgT30">
            <x-input v-model="message.password" placeholder="请输入邮箱密码"></x-input>
        </div>
        <div class="yellow-btn mgT50" @click="login">登录</div>
    </div>
    <div class="footer-logo">
      <div>
        <i class="logo"></i>
        <p class="logo-text">新东方厦门（泉州|漳州）学校</p>
      </div>
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
      message: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$router.push({path: '/home', query: {}})
    }
  }
}
</script>
