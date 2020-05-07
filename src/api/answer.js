import request from '@/utils/request'

export function listAnswer (query) {
  return request({
    url: '/answer/list',
    method: 'get',
    params: query
  })
}

export function addAnswer (data) {
  return request({
    url: '/answer/add',
    method: 'post',
    data: data
  })
}
