<template>
    <div class="m_container">
        <div class="m_container_main m_padded_tb_big">
            <div class="m_container_index m_padded_lr_small">
                <!--   分类列表         -->
                <div class="m_category_list_container">
                    <div class="m_category_list_title">
                        <span>全部分类</span>
                    </div>
                    <div class="m_category_list_list m_padded_b_large animate__animated animate__bounceInLeft">
                        <CategoryOrTagList :is_category="true" :items="data" />
                        <!--分页组件-->
                        <div class="m-pagination">
                            <Pagination :page="page" :size="size" :total="total" @pageChangeHandler="pageChange"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Aside/>
    </div>
</template>

<script>
    import Aside from '@/views/Aside'
    import CategoryOrTagList from "@/components/CategoryOrTagList";
    import Pagination from '@/components/Pagination'
    import crud from '@/mixins/crud'


    export default {
        name: "index",
        components: {
            CategoryOrTagList,
            Aside,
            Pagination
        },
        mixins: [crud],
        created() {
            this.init()
        },
        data() {
            return {
                url: 'api/type',
                size: 16,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .m_category_list_container {
        .m_category_list_title {
            position: relative;
            display: flex;
            align-items: center;
            color: var(--theme);
            font-weight: 500;
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid var(--classC);
        }
    }

</style>
