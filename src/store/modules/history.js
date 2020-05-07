const HistoryKey = 'ZhiFou-History-Key'

// 获取历史记录
function getHistoryList () {
  var historyItems = localStorage.getItem(HistoryKey)
  if (historyItems !== undefined && historyItems !== null) {
    return JSON.parse(historyItems)
  } else {
    return []
  }
}
// 保存历史记录
function saveHistory (val) {
  localStorage.setItem(HistoryKey, JSON.stringify(val))
}
// 清空历史记录
function clearHistory () {
  localStorage.removeItem(HistoryKey)
}

const history = {
  state: {
    historyList: getHistoryList()
  },
  mutations: {
    ADD_HISTORY: (state, newSearchValue) => {
      // 去除历史记录中与新记录相同的元素
      state.historyList = state.historyList.filter(val => val !== newSearchValue)
      // 将新记录插入到数组最前面
      state.historyList.unshift(newSearchValue)
      // 插入记录后如果历史记录数大于15则去掉最后一个
      // if (state.historyList.length > 15) {
      //   state.historyList.pop()
      // }
      saveHistory(state.historyList)
    },
    REMOVE_HISTORY: (state, removeValue) => {
      state.historyList = state.historyList.filter(val => val !== removeValue)
      saveHistory(state.historyList)
    },
    CLEAR_HISTORY: (state) => {
      state.historyList = []
      clearHistory()
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
    },
    removeHistory ({ commit }, removeValue) {
      commit('REMOVE_HISTORY', removeValue)
    },
    clearHistory ({ commit }) {
      commit('CLEAR_HISTORY')
    }
  }
}

export default history
