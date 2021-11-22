<template>
    <div class="m_container">
        <div class="m_container_main m_padded_tb_big">
            <div class="m_container_index m_padded_lr_small">
                <div class="m_archive_list_container">
                    <div class="m_archive_list_title">
                        <span>文章归档</span>
                    </div>
                    <div class="m_archive_block animate__animated animate__bounceInLeft">
                        <el-timeline>
                            <el-timeline-item v-for="item in archives" :timestamp="item.month" placement="top">
                                <el-card>
                                    <ol class="panel_body">
                                        <li v-for="blog in item.blogs">
                                            <a class="item" target="_blank" :href="'/articles/' + blog.id">{{
                                                parseTime(blog.createTime, '{m}-{d}') }}：{{ blog.title }}</a>
                                        </li>
                                    </ol>
                                </el-card>
                            </el-timeline-item>
                        </el-timeline>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getArchives} from '@/api/system/blog'
    import {parseTime} from '@/utils'

    export default {
        name: "index",
        data() {
            return {
                archives: null
            }
        },
        methods: {
            parseTime
        },
        created() {
            getArchives().then(res => {
                this.archives = res
            })
        }
    }
</script>

<style lang="scss" scoped>
    .m_archive_list_container {
        .m_archive_list_title {
            position: relative;
            display: flex;
            align-items: center;
            color: var(--theme);
            font-weight: 500;
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid var(--classC);
        }

        .m_archive_block {
            padding: 15px;
            .panel_body {
                li {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin-bottom: 15px;
                }
                li:last-child {
                    margin-bottom: 0px;
                }
                .item {
                    color: var(--routine);
                }
                .item:hover {
                    color: var(--theme);
                }
            }
        }
    }
</style>
