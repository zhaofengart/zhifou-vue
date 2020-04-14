import request from '@/utils/request'

// 登录方法
export function login (workNum, password) {
  const data = {
    workNum,
    password
  }
  return request({
    url: '/login',
    method: 'post',
    params: data
  })
}

// 获取用户详细信息
export function getInfo () {
  return request({
    url: '/getInfo',
    method: 'get'
  })
}

// 退出方法
export function logout () {
  return request({
    url: '/logout',
    method: 'post'
  })
}

// 获取验证码
export function getCode (email) {
  const data = {
    email
  }
  return request({
    url: '/sendEmail',
    method: 'post',
    params: data
  })
}

// 注册
export function register (form, code) {
  const params = {
    code
  }
  return request({
    url: '/register',
    method: 'post',
    params: params,
    data: form
  })
}

// 找回密码
export function findPassword (form, code) {
  const params = {
    code
  }
  return request({
    url: '/findPassword',
    method: 'post',
    params: params,
    data: form
  })
}
