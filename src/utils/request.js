import axios from 'axios'
import Config from '@/settings'
import { Notification } from 'element-ui'

// 创建axios实例
const service = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_API : '/', // api 的 base_url
    timeout: Config.timeout // 请求超时时间
})

service.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/json'
        return config
    },
    error => {
        Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        let code = 0
        try {
            code = error.response.data.status
        } catch (e) {
            if (error.toString().indexOf('Error: timeout') !== -1) {
                Notification.error({
                    title: '网络请求超时',
                    duration: 5000
                })
                return Promise.reject(error)
            }
        }
        if(code) {
            Notification.error({
                title: '接口请求失败',
                duration: 5000
            })
        }
        return Promise.reject(error)
    }
)

export default service
