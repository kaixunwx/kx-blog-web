import request from '@/utils/request'

/**
 * 获取标签 默认展示4行每行3条 11条 最后位置留给查看全部按钮
 */
export function getAsideTags() {
    return request({
        url: 'api/tag/recent',
        method: 'get'
    })
}

