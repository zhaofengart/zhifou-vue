import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import history from './modules/history'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    history
  },
  getters
})

export default store
