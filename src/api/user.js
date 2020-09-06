import request from '@/utils/request'

export function login(params) {
    return request({
        url: '/login',
        method: 'get',
        params
    })
}

export function reg(data) {
    return request({
        url: '/reg',
        method: 'post',
        data
    })
}

export function sendEmail(params) {
    return request({
        url: '/email',
        method: 'get',
        params
    })
}

export function info(params) {
    return request({
        url: '/info',
        method: 'get',
        params
    })
}