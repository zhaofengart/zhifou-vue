const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  historyList: state => state.history.historyList
}
export default getters
