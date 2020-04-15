import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    department: '',
    job: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_DEPARTMENT: (state, department) => {
      state.department = department
    },
    SET_JOB: (state, job) => {
      state.job = job
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      const workNum = userInfo.workNum.trim()
      const password = userInfo.password
      return new Promise((resolve, reject) => {
        login(workNum, password).then(res => {
          setToken(res.data)
          commit('SET_TOKEN', res.data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(res => {
          const user = res.data
          const avatar = user.avatar === '' ? require('@/assets/image/profile.jpg') : user.avatar

          commit('SET_NAME', user.name)
          commit('SET_AVATAR', avatar)
          commit('SET_DEPARTMENT', user.department)
          commit('SET_JOB', user.job)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 退出系统
    LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
