import request from '@/utils/request'

export function addClass (data) {
  return request({
    url: '/class/add',
    method: 'post',
    data: data
  })
}
