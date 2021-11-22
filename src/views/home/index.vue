<template>
    <div class="m_container">
        <div class="m_container_main m_padded_tb_big">
            <div class="m_container_index m_padded_lr_small">
                <!--    轮播图       -->
                <Carousel class="m_padded_t_big" :images="images"/>
                <!--    热门分类          -->
                <HotType :hot_types="hot_types"/>
                <!--    推荐文章         -->
                <div class="m_recommend_item_title">
                    <span>推荐文章</span>
                </div>
                <ArticleList :articles="data" :isRecommend="true" class="animate__animated animate__bounceInUp"/>
            </div>
            <div class="m_container_pagination m_padded_tb_small">
                <Pagination :page="page" :size="size" :total="total" @pageChangeHandler="pageChange"/>
            </div>
        </div>
        <Aside/>
    </div>
</template>

<script>
    import Carousel from '@/components/Carousel'
    import ArticleList from '@/components/ArticleList'
    import HotType from './HotType'
    import Aside from '@/views/Aside'
    import crud from '@/mixins/crud'
    import {getHotTypes} from '@/api/system/type'
    import Pagination from '@/components/Pagination'

    import Test1 from '@/assets/images/test1.jpeg'

    export default {
        name: "Home",
        components: {
            Carousel,
            HotType,
            ArticleList,
            Aside,
            Pagination
        },
        mixins: [crud],
        created() {
            // 热门分类
            getHotTypes().then(res => {
                this.hot_types = res
            })
            // 推荐文章
            this.init()
        },
        data() {
            return {
                url: 'api/blog',
                images: [Test1],
                hot_types: [],
                size: 9,
                sort: ['isTop,desc', 'createTime,desc'],
                params: {
                    isRecommend: 1,
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .m_container_pagination {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .m_recommend_item_title {
        position: relative;
        display: flex;
        align-items: center;
        color: var(--theme);
        font-weight: 500;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid var(--classC);
    }
</style>
