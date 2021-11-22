<template>
    <header class="m_header">
        <div class="m_footer m_container">
            <span v-html="footerTxt"/>
            <span> ⋅ </span>
            <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">{{ caseNumber }}</a>
        </div>
    </header>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Footer",
        computed: {
            ...mapGetters([
                'footerTxt',
                'caseNumber',
            ])
        }
    }
</script>

<style lang="scss">
    .m_footer {
        display: flex;
        align-items: center;
        min-height: 65px;
        border-top: 1px solid var(--classB);
        color: var(--minor);
    }
</style>
