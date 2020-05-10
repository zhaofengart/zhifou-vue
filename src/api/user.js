import request from '@/utils/request'

export function listScore () {
  return request({
    url: '/user/score/list',
    method: 'get'
  })
}
