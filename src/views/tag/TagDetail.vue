<template>
    <div class="m_container">
        <div class="m_container_main m_padded_tb_big">
            <div class="m_container_index m_padded_lr_small animate__animated animate__bounceInLeft">
                <CategoryOrTagArticleList :alias="this.alias" />
            </div>
        </div>
        <Aside/>
    </div>
</template>

<script>
    import CategoryOrTagArticleList from '@/components/CategoryOrTagArticleList'
    import Aside from '@/views/Aside'

    export default {
        name: "TagDetail",
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
