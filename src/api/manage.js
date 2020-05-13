import request from '@/utils/request'

export function memberlist (query) {
  return request({
    url: '/manage/memberlist',
    method: 'get',
    params: query
  })
}

export function searchMember (name) {
  return request({
    url: '/manage/searchmember',
    method: 'get',
    params: name
  })
}

export function deletemember (id) {
  return request({
    url: '/manage/deletemember',
    method: 'post',
    data: id
  })
}

export function editdepartment (oldName, newName) {
  const data = {
    oldName,
    newName
  }
  return request({
    url: '/manage/editdepartment',
    method: 'post',
    data: data
  })
}

export function deleteDepartment (name) {
  return request({
    url: '/manage/deletedepartment',
    method: 'post',
    data: name
  })
}

export function getDepartmentList () {
  return request({
    url: '/manage/departmentlist',
    method: 'get'
  })
}
export function addDepartment (name) {
  return request({
    url: '/manage/adddepartment',
    method: 'post',
    data: name
  })
}
