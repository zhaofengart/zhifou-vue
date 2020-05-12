import request from '@/utils/request'

export function listAnswerComment (query) {
  return request({
    url: '/comment/answer/list',
    method: 'get',
    params: query
  })
}

export function addAnswerComment (data) {
  return request({
    url: '/comment/answer/add',
    method: 'post',
    data: data
  })
}
