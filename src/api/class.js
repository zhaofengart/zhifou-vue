import request from '@/utils/request'

export function listArticle (query) {
  return request({
    url: '/article/list',
    method: 'get',
    params: query
  })
}

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
    url: '/article/draft/save',
    method: 'post',
    data: data
  })
}

export function articlelist (query) {
  return request({
    url: '/article/list',
    method: 'get',
    params: query
  })
}

export function getClassDetail (articleId) {
  return request({
    url: '/article',
    method: 'get',
    params: {
      articleId
    }
  })
}

export function listArticleDraft (query) {
  return request({
    url: '/article/draft/list',
    method: 'get',
    params: query
  })
}
