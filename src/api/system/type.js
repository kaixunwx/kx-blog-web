import request from '@/utils/request'


export function getHotTypes() {
    return request({
        url: 'api/type/hot',
        method: 'get',
    })
}

export function getByAlias(alias) {
    return request({
        url: `api/type/${alias}`,
        method: 'get'
    })
}
