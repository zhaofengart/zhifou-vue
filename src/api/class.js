import request from '@/utils/request'

export function addClass (data) {
  return request({
    url: '/article/add',
    method: 'post',
    data: data
  })
}

export function searchArticle (query) {
  return request({
    url: '/article/title/search',
    method: 'get',
    params: query
  })
}

export function savearticle (data) {
  return request({
    url: 'article/save',
    method: 'post',
    data: data
  })
}
