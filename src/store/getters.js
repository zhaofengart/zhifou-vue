const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  department: state => state.user.department,
  job: state => state.user.job,
  historyList: state => state.history.historyList
}
export default getters
