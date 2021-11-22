import request from '@/utils/request'
import Config from '@/settings'

export function getUserInfo() {
    return request({
        url: `api/user?username=${Config.username}`,
        method: 'get',
    })
}
