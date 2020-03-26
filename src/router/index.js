import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { title: '知否问答' }
    },
    {
      path: '/index2',
      component: () => import('@/views/index2'),
      hidden: true
    },
    {
      path: '/login',
      component: () => import('@/views/login'),
      hidden: true,
      meta: { title: '知否问答' }
    },
    {
      path: '/register',
      component: () => import('@/views/register'),
      hidden: true,
      meta: { title: '知否问答' }
    },
    {
      path: '/findPassword',
      component: () => import('@/views/findPassword'),
      hidden: true,
      meta: { title: '知否问答' }
    }
  ]
})
