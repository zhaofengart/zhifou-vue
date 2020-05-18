const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  department: state => state.user.department,
  job: state => state.user.job,
  roles: state => state.user.roles,
  permissions: state => state.user.permissions,
  historyList: state => state.history.historyList
}
export default getters
