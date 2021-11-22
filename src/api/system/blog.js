import { initData } from '@/api/data'
import request from '@/utils/request'

/**
 * 获取最近发布的5篇文章
 */
export function getRecentPublish() {
    const url = 'api/blog/recent'
    const params = {
        page: 0,
        size: 9,
        sort: ['createTime', 'desc']
    }
    return initData(url, params)
}


/**
 * 获取归档数据
 */
export function getArchives() {
    return request({
        url: 'api/blog/archives',
        method: 'get'
    })
}
