import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/page/login')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/page/home')
    },
    {
      path: '/list',
      component: () => import('@/page/list'),
      children: [
        {
          path: 'myTour',
          name: 'myTour',
          component: () => import('@/page/myTour')
        },
        {
          path: 'tourList',
          name: 'tourList',
          component: () => import('@/page/tourList')
        },
        {
          path: 'tourDetail',
          name: 'tourDetail',
          component: () => import('@/page/tourDetail')
        }
      ]
    }

  ]
})
