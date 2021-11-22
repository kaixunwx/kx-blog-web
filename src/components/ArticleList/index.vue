<template>
    <div>
        <ul class="m_list">
            <li class="m_list_item default m_padded_tb_big" v-for="item in articles">
                <div class="left_line"></div>
                <a :href="'/articles/' + item.id" target="_blank" class="thumbnail" :title="item.title">
                    <el-image class="thumbnail_image" :src="item.thumbnail ? item.thumbnail : item.type.thumbnail "
                              :alt="item.title" lazy/>
                    <svg-icon v-if="item.withPicture" icon-class="image"/>
                </a>
                <div class="information m_margin_l_big">
                    <a :href="'/articles/' + item.id" target="_blank" class="title" :title="item.title">
                        <span v-if="item.top" class="badge">置顶</span>
                        {{ item.title }}
                    </a>
                    <div>
                        <a :href="'/articles/' + item.id" target="_blank" class="abstract" title="文章摘要">
                            {{ item.content }}
                        </a>
                    </div>
                    <div class="meta">
                        <ul class="items">
                            <li class="item">{{  parseTime(item.createTime, '{y}-{m}-{d}') }}</li>
                            <li class="item">{{ toThousands(item.views )}} 阅读</li>
                            <li class="item">{{ item.comments ?  toThousands(item.comments.length) : 0 }} 评论</li>
<!--                            <li class="item">{{ toThousands(item.likes )}} 点赞</li>-->
                        </ul>
                        <div class="article_type" v-if="isRecommend && item.type">
                            <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="15"
                                 height="15">
                                <path d="M512.2 564.743a76.818 76.818 0 0 1-30.973-6.508L108.224 393.877c-26.105-11.508-42.56-35.755-42.927-63.272-.384-27.44 15.356-52.053 41.042-64.232l373.004-176.74c20.591-9.737 45.16-9.755 65.75.017L917.68 266.39c25.668 12.188 41.39 36.792 41.024 64.231-.384 27.5-16.821 51.73-42.908 63.237l-372.57 164.377a77.18 77.18 0 0 1-31.025 6.508zM139.843 329.592l370.213 163.241c1.291.56 3.018.567 4.345-.009l369.758-163.128-369.706-175.464v-.01c-1.326-.628-3.158-.636-4.502 0l-370.108 175.37zm748.015 1.858h.175-.175zM512.376 941.674c-10.348 0-20.8-2.32-30.537-6.997L121.05 778.624c-18.113-7.834-26.454-28.87-18.62-46.983 7.835-18.112 28.862-26.488 46.993-18.61l362.08 156.629 345.26-156.366c17.939-8.166 39.14-.253 47.324 17.746 8.166 17.964.227 39.157-17.729 47.324l-344.51 156.61c-9.196 4.449-19.281 6.7-29.471 6.7z"
                                      fill="#444"></path>
                                <path d="M871.563 515.449L511.81 671.775 152.358 515.787v73.578a34.248 34.248 0 0 0 20.76 31.48l301.518 129.19c11.806 5.703 24.499 8.546 37.175 8.546s25.367-2.843 37.174-8.546L850.82 620.534a34.248 34.248 0 0 0 20.744-31.474V515.45z"
                                      fill="#ff6a18"></path>
                            </svg>
                            <a class="link" :href="'/categories/' + item.type.alias" target="_blank">
                                {{ item.type.name }}
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import { parseTime, toThousands } from '@/utils'


    export default {
        name: "ArticleList",
        props: {
            isRecommend: {
                type: Boolean,
                default: false
            },
            articles: {
                type: Array,
                required: true
            }
        },
        computed: {
            ...mapGetters([
                'defaultThumbnail'
            ])
        },
        methods: {
            parseTime,
            toThousands
        }
    }
</script>


<style lang="scss" scoped>
    .m_list_item {
        border-bottom: 1px solid var(--classC);
        .left_line {
            position: absolute;
            z-index: 1;
            top: 15px;
            left: -15px;
            width: 4px;
            height: 50px;
            border-radius: 2px;
            background: var(--theme);
            -webkit-transform: scaleY(0);
            transform: scaleY(0);
            transition: -webkit-transform 0.35s;
            transition: transform 0.35s;
        }

        .thumbnail {
            position: relative;

            .el-image {
                transition: opacity 0.3s;
            }

            .el-image:hover {
                opacity: 0.8;
            }

            .thumbnail_image {
                width: 180px;
                height: 120px;
            }

            svg {
                position: absolute;
                z-index: 1;
                top: 5px;
                left: 5px;
                width: 20px;
                height: 20px;
                fill: #fff;
            }
        }

        .information {
            display: flex;
            flex-direction: column;

            .title {
                margin-bottom: 10px;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-word;
                color: var(--main);
                font-size: 18px;
                line-height: 24px;
                max-height: 48px;
                transition: color 0.3s;

                .badge {
                    height: 20px;
                    line-height: 20px;
                    background-image: -webkit-linear-gradient(0deg, #3ca5f6 0%, #a86af9 100%);
                    color: #fff;
                    font-size: 12px;
                    margin-right: 5px;
                    padding: 0 8px;
                    white-space: nowrap;
                    vertical-align: 2px;
                }
            }

            .title:hover {
                color: var(--theme);
            }

            .abstract {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                color: var(--minor);
                word-break: break-word;
                line-height: 22px;
                max-height: 44px;
                opacity: 0.85;
            }

            .meta {
                display: flex;
                align-items: center;
                margin-top: auto;
                color: var(--minor);
                font-size: 13px;

                .items {
                    display: flex;
                    align-items: center;
                }

                .items li::after {
                    content: '/';
                    color: var(--seat);
                    padding: 0 5px;
                }

                .items li:last-child::after {
                    display: none;
                }

                .article_type {
                    display: flex;
                    position: absolute;
                    right: 0;

                    .icon {
                        margin-right: 3px;
                    }

                    .link {
                        color: var(--minor);
                    }

                    .link:hover {
                        color: var(--theme);
                    }
                }
            }
        }
    }

    .m_list_item:hover .left_line {
        -webkit-transform: scaleY(1);
        transform: scaleY(1)
    }

    .m_list_item:last-child {
        border-bottom: none;
    }

    .m_list_item.default {
        display: flex;
        position: relative;
    }

    .el-image__inner {
        width: 100px !important;
    }


</style>
