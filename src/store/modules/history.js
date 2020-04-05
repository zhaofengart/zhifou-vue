const history = {
  state: {
    historyList: []
  },
  mutations: {
    ADD_HISTORY: (state, newSearchValue) => {
      // 去除历史记录中与新记录相同的元素
      state.historyList = state.historyList.filter(val => val !== newSearchValue)
      // 将新记录插入到数组最前面
      state.historyList.unshift(newSearchValue)
    }
  },
  actions: {
    // 添加历史记录
    addHistory ({ commit }, newSearchValue) {
      // 不添加空字符串
      if (newSearchValue === '') {
        return
      }
      commit('ADD_HISTORY', newSearchValue)
    }
  }
}

export default history
