import router from './router'
import Config from '@/settings'
import store from '@/store'

router.beforeEach((to, from, next) => {
    if (to.meta.title) { // 添加页面title后缀
        document.title = to.meta.title + ' - ' + Config.title
    }
    if(store.getters.recentPublish.length === 0) { // 每次访问新的页面或者刷新页面 重新拉取右侧数据
        store.dispatch('GetUserInfo')
        store.dispatch('GetRecentPublish')
        store.dispatch('GetAsideTags').then(() => {
            next({ ...to, replace: true })
        })
    } else {
        next()
    }
})
