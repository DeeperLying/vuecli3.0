import request from '@/utils/request'

export function saveArticle(data) {
  return request({
    url: '/saveArticle',
    method: 'post',
    data
  })
}

export function getArticleList(params) {
  return request({
    url: '/getArticleList',
    method: 'get',
    params
  })
}

export function getArticle(params) {
  return request({
    url: '/getArticle',
    method: 'get',
    params
  })
}
