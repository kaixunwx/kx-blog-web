import VueRouter from 'vue-router'
import Vue from 'vue'

import Layout from '@/layout'

Vue.use(VueRouter)

export const constantRouterMap = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: '/dashboard',
                component: () => import('@/views/home'),
                name: 'Dashboard',
                meta: {title: '首页', noCache: true}
            },
            {
                path: '/categories',
                component: () => import('@/views/category/CategorySummary'),
                name: 'CategoriesSummary',
                meta: {title: '全部分类', noCache: true},
            },
            {
                path: "/categories/:alias",
                name: 'CategoriesDetail',
                component: () => import('@/views/category/CategoryDetail'),
                meta: {title: '', noCache: true},
                props: true
            },
            {
                path: '/tags',
                component: () => import('@/views/tag/TagSummary'),
                name: 'TagsSummary',
                meta: {title: '全部标签', noCache: true}
            },
            {
                path: "/tags/:alias",
                name: 'TagsDetail',
                component: () => import('@/views/tag/TagDetail'),
                meta: {title: '', noCache: true},
                props: true
            },
            {
                path: "/articles/:articleId",
                name: 'ArticleDetail',
                component: () => import('@/views/article'),
                meta: {title: '博客详情', noCache: true},
                props: true
            },
            {
                path: "/archives",
                name: 'Archives',
                component: () => import('@/views/archive'),
                meta: {title: '文章归档', noCache: true},
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: constantRouterMap
})

export default router

