import {getUserInfo} from '@/api/system/user'
import {getRecentPublish} from '@/api/system/blog'
import {getAsideTags} from '@/api/system/tag'

const aside = {
    state: {
        user: {},
        recentPublish: [],
        blogAmount: 0,
        commentAmount: 0,
        tags: [],
    },
    mutations: {
        SET_USER: (state, user) => {
            state.user = user
        },
        SET_RECENT_PUBLISH: (state, recentPublish) => {
            state.recentPublish = recentPublish
        },
        SET_BLOG_AMOUNT: (state, blogAmount) => {
            state.blogAmount = blogAmount
        },
        SET_COMMENT_AMOUNT: (state, commentAmount) => {
            state.commentAmount = commentAmount
        },
        SET_TAGS: (state, tags) => {
            state.tags = tags
        }
    },
    actions: {
        GetUserInfo({commit}) {
            return new Promise((resolve, reject) => {
                getUserInfo().then(res => {
                    setUserInfo(res, commit)
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        GetRecentPublish({commit}) {
            return new Promise((resolve, reject) => {
                getRecentPublish().then(res=> {
                    setRecentPublish(res, commit)
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        GetAsideTags({commit}) {
            return new Promise((resolve, reject) => {
                getAsideTags().then(res=> {
                    setTags(res, commit)
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}


export const setUserInfo = (res, commit) => {
    commit('SET_USER', res.user)
}

export const setRecentPublish = (res, commit) => {
    commit('SET_RECENT_PUBLISH', res.content)
    commit('SET_BLOG_AMOUNT', res.totalElements)
}

export const setTags = (res, commit) => {
    commit('SET_TAGS', res)
}


export default aside
