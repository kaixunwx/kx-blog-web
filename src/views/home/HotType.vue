<template>
    <div class="m_hot_type_container">
        <div class="m_hot_type_title">
            <span>热门分类</span>
        </div>
        <div class="m_hot_type_list">
            <el-row :gutter="20" class="m_padded_tb_big">
                <el-col :span="colspan" v-for="hot_type in hot_types" class="item">
                    <a :href="'/categories/' + hot_type.alias" target="_blank">
                        <figure class="inner">
                            <span class="count">{{hot_type.blogCount}} ℃</span>
                            <el-image :src="hot_type.thumbnail ? hot_type.thumbnail: defaultThumbnail" class="image" lazy/>
                            <figcaption class="title">{{hot_type.name}}</figcaption>
                        </figure>
                    </a>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "HotTypes",
        props: {
            hot_types: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                colspan: 6,
                screenWidth: document.body.clientWidth
            }
        },
        computed: {
            ...mapGetters([
                'defaultThumbnail',
            ])
        },
        watch: {
            screenWidth:  {
                immediate: true,
                handler: function (newVal) {
                    if(newVal <= 768) {
                        this.colspan = 12
                    } else {
                        this.colspan = 6
                    }
                }
            }
        },
        mounted() {
            window.onresize = () => {
                return (() => {
                    this.screenWidth = document.body.clientWidth
                })()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .m_hot_type_container {
        .m_hot_type_title {
            position: relative;
            display: flex;
            align-items: center;
            color: var(--theme);
            font-weight: 500;
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid var(--classC);
        }

        .m_hot_type_list {
            .inner {
                position: relative;

                .image {
                    width: 100%;
                    height: 120px;
                    object-fit: cover;
                    transition: opacity 0.35s;
                }

                .count {
                    display: flex;
                    align-items: center;
                    position: absolute;
                    z-index: 1;
                    top: 5px;
                    right: 5px;
                    background-image: linear-gradient(to right, #fc712a, #f84c39);
                    background-color: #f84c39;
                    color: #fff;
                    font-size: 12px;
                    height: 18px;
                    padding: 0 8px;
                    border-radius: 2px;
                    white-space: nowrap;
                }

                .title {
                    font-size: 13px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    text-align: center;
                    padding: 0 8px;
                    margin-top: -5px;
                    line-height: 32px;
                    color: var(--minor);
                    background: var(--classD);
                    transition: background 0.35s;
                    border-radius: 0 0 var(--radius-inner) var(--radius-inner);
                }
            }

            .inner:hover .image {
                opacity: 0.8;
            }

            .inner:hover .title {
                background: var(--classC);

            }

        }
    }
</style>
