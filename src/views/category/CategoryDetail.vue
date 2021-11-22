<template>
    <div class="m_container">
        <div class="m_container_main m_padded_tb_big">
            <div class="m_container_index m_padded_lr_small">
                <CategoryOrTagArticleList :alias="alias" class="animate__animated animate__bounceInLeft"/>
            </div>
        </div>
        <Aside/>
    </div>
</template>

<script>
    import CategoryOrTagArticleList from '@/components/CategoryOrTagArticleList'
    import Aside from '@/views/Aside'

    export default {
        name: "CategoryDetail",
        components: {
            CategoryOrTagArticleList,
            Aside
        },
        props: {
            alias: {
                type: String,
                required: true
            }
        },
        created() {
            document.title = this.alias
        }
    }
</script>

<style scoped>

</style>
