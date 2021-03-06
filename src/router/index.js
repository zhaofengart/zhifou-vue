import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

export default new Router({
  mode: 'history', // 去掉url中的#
  routes: [
    {
      path: '/',
      component: () => import('@/views/index2'),
      hidden: true,
      meta: { title: '知否问答' }
    },
    {
      path: '/question',
      component: () => import('@/views/questionDetail'),
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
    },
    {
      path: '/searchresult',
      component: () => import('@/views/searchresult'),
      hidden: true,
      meta: { title: '知否问答' }
    },
    {
      path: '/search',
      component: () => import('@/views/searchResult2'),
      hidden: true,
      meta: {title: '知否问答'}
    },
    {
      path: '/classDetail',
      component: () => import('@/views/classDetail'),
      hidden: true,
      meta: {title: '知否问答'}
    },
    {
      path: '/articlelist',
      component: () => import('@/views/articlelist'),
      hidden: true,
      meta: {title: '知否问答'}
    },
    {
      path: '/Manage',
      component: () => import('@/views/Manage'),
      hidden: true,
      meta: {title: '知否问答'}
    },
    {
      path: '/departmentManage',
      component: () => import('@/views/departmentManage'),
      hidden: true,
      meta: {title: '知否问答'}
    },
    {
      path: '/stationManage',
      component: () => import('@/views/stationManage'),
      hidden: true,
      meta: {title: '知否问答'}
    }
  ]
})
