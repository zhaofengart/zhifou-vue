import request from '@/utils/request'

export function upload (formdata) {
  return request({
    url: '/common/upload',
    method: 'post',
    data: formdata,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}
