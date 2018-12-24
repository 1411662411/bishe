import request from '@/api/request'

export function XXX(data) {
    return request({
        url:"cms",
        method: 'get',
        params: data
    })
}