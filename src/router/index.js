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
      hidden: true,
      meta: { title: '知否问答' }
    },
    {
      path: '/questionpublish',
      component: () => import('@/views/questionpublish'),
      hidden: true,
      meta: { title: '知否问答' }
    },
    {
      path: '/profile',
      component: () => import('@/views/profile'),
      hidden: true,
      meta: { title: '知否问答' }
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
    },
    {
      path: '/index',
      component: () => import('@/views/index'),
      hidden: true,
      meta: { title: '知否问答' }
    },
    {
      path: '/writeclass',
      component: () => import('@/views/writeclass'),
      hidden: true,
      meta: { title: '知否问答' }
    },
    {
      path: '/notificationCenter',
      component: () => import('@/views/notificationCenter'),
      hidden: true,
      meta: { title: '知否问答' }
    }
  ]
})
