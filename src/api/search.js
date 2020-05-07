import request from '@/utils/request'

export function listRecommendKeyword (value) {
  return request({
    url: '/search/recommend',
    params: {
      value
    }
  })
}
