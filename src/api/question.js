import request from '@/utils/request'

export function addQuestion (data) {
  return request({
    url: '/question/add',
    method: 'post',
    data: data
  })
}

export function recommendQuestion (title) {
  return request({
    url: '/question/title/like',
    method: 'get',
    params: {
      title
    }
  })
}

export function getQuestion (questionId) {
  return request({
    url: '/question/' + questionId,
    method: 'get'
  })
}

export function listQuestion (query) {
  return request({
    url: '/question/list',
    method: 'get',
    params: query
  })
}
