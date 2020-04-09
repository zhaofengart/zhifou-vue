import request from '@/utils/request'

export function listAnswer (query) {
  return request({
    url: '/answer/list',
    method: 'get',
    params: query
  })
}
