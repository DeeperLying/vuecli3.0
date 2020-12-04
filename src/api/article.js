import request from '@/utils/request'

export function saveArticle(data) {
  return request({
    url: '/saveArticle',
    method: 'post',
    data
  })
}
