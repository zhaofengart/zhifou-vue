import request from '@/utils/request'

export function listDept () {
  return request({
    url: '/department/list',
    method: 'get'
  })
}
