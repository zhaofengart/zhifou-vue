// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import ElementUI from 'element-ui'
import './assets/styles/element-variables.scss'

import VueHighlightJS from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import vueiInfinite from 'vue-infinite-scroll'

import '@/assets/styles/index.scss' // global css
import '@/assets/styles/ruoyi.scss' // ruoyi css
import '@/assets/styles/zhifou.scss' // zhifou.css

import './assets/icons' // icon
// import './permission' // permission control

import { parseTime, resetForm, addDateRange, download } from '@/utils/ruoyi'
import { escapeStringHTML, mdToHtml } from '@/utils/filters'

// import 'element-ui/lib/theme-chalk/index.css'
import IndexHeader from '@/components/IndexHeader'

// 全局方法挂载
Vue.prototype.parseTime = parseTime
Vue.prototype.resetForm = resetForm
Vue.prototype.addDateRange = addDateRange
Vue.prototype.download = download

// 全局组件挂载
Vue.component('IndexHeader', IndexHeader)

Vue.use(ElementUI)
Vue.use(VueHighlightJS)
Vue.use(vueiInfinite)

Vue.config.productionTip = false

Vue.prototype.escapeStringHTML = escapeStringHTML
Vue.prototype.mdToHtml = mdToHtml

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
