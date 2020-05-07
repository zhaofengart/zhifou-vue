import request from '@/utils/request'

export function listJob () {
  return request({
    url: '/job/list',
    method: 'get'
  })
}
