<template>
    <div v-if="this.data_status">
        <div class="m_container">
            <!-- 面包屑 -->
            <div class="m_container_breadcrumb m_padded_lr_small">
                <ul class="m_breadcrumb_bread">
                    <li class="item">
                        <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                            <path d="M307.867 805.441h408.266V575.792c0-15.31 29.344-22.046 44.654-22.046 15.336 0 27.762 12.426 27.762 27.762v277.544c0 15.335-12.426 27.762-27.762 27.762h-499.59c-15.31 0-27.762-12.427-27.762-27.762V581.507c0-15.31 12.426-27.762 27.762-27.762 15.31 0 46.67 6.71 46.67 22.046v229.65zM205.8 524.758c-10.845 10.845-56.851 3.93-67.696-6.89a27.762 27.762 0 0 1-.025-39.295l353.253-353.227a27.762 27.762 0 0 1 39.296 0L883.93 478.573a27.813 27.813 0 0 1-12.478 46.491c-9.568 2.552-46.236 6.686-53.253-.331L512 218.559 205.8 524.758z"></path>
                        </svg>
                        <a href="/" class="link" title="首页">首页</a>
                    </li>
                    <li class="line">/</li>
                    <li class="item" v-if="article.type">
                        <a class="link" :href="'/categories/' + article.type.alias" target="_blank">{{article.type.name }}</a>
                    </li>
                    <li class="line">/</li>
                    <li class="item">正文</li>
                </ul>
            </div>
        </div>
        <div class="m_container ">
            <div class="m_container_main m_padded_tb_big">
                <!-- 文章详情 -->
                <div class="m_container_index m_padded_big">
                    <el-tag effect="dark">原创</el-tag>
                    <h1 class="title">{{ article.title }}</h1>
                    <div class="information">
                        <img class="avatar" :src="article.author.avatar"/>
                        <div class="meta">
                            <div class="author">
                                <a class="link" href="#">{{ article.author.nickname }}</a>
                                <div class="item">
                                    <span class="text">{{ parseTime(article.createTime, '{y}-{m}-{d}') }}</span>
                                    <span class="line">/</span>
                                    <span class="text">{{ article.comments ? article.comments.length: 0}} 评论</span>
                                    <span class="line">/</span>
                                    <span class="text">{{ toThousands(article.views) }} 阅读</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="prompt animate__animated animate__fadeInUp">
                        <div class="prompt_wrapper">
                            <div class="prompt_title">
                                <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20"
                                     height="20">
                                    <path d="M0 512c0 282.778 229.222 512 512 512s512-229.222 512-512S794.778 0 512 0 0 229.222 0 512z"
                                          fill="#FF8C00" fill-opacity=".51"></path>
                                    <path d="M462.473 756.326a45.039 45.039 0 0 0 41.762 28.74 45.039 45.039 0 0 0 41.779-28.74h-83.541zm119.09 0c-7.73 35.909-39.372 62.874-77.311 62.874-37.957 0-69.598-26.965-77.33-62.874H292.404a51.2 51.2 0 0 1-42.564-79.65l23.723-35.498V484.88a234.394 234.394 0 0 1 167.492-224.614c3.635-31.95 30.498-56.815 63.18-56.815 31.984 0 58.386 23.808 62.925 54.733A234.394 234.394 0 0 1 742.093 484.88v155.512l24.15 36.454a51.2 51.2 0 0 1-42.668 79.48H581.564zm-47.957-485.922c.069-.904.12-1.809.12-2.73 0-16.657-13.26-30.089-29.491-30.089-16.214 0-29.474 13.432-29.474 30.089 0 1.245.085 2.491.221 3.703l1.81 15.155-14.849 3.499a200.226 200.226 0 0 0-154.265 194.85v166.656l-29.457 44.1a17.067 17.067 0 0 0 14.182 26.556h431.155a17.067 17.067 0 0 0 14.234-26.487l-29.815-45.04V484.882A200.21 200.21 0 0 0 547.26 288.614l-14.985-2.986 1.331-15.224z"
                                          fill="#FFF"></path>
                                    <path d="M612.864 322.697c0 30.378 24.303 55.022 54.272 55.022 30.003 0 54.323-24.644 54.323-55.022 0-30.38-24.32-55.023-54.306-55.023s-54.306 24.644-54.306 55.023z"
                                          fill="#FA5252"></path>
                                </svg>
                                <span class="text">温馨提示：</span>
                            </div>
                            <div class="prompt_content">
                                若内容或图片失效，请留言反馈。
                            </div>
                        </div>
                    </div>
                    <article class="article_detail" v-html="this.articleHtml"/>
                    <div class="article_tags" v-if="article.tags">
                        <a :href="'/tags/' + tag.alias" v-for="tag in article.tags" target="_blank">
                            {{tag.name}}
                        </a>
                    </div>
                    <div class="copyright">
                        <div class="items">
                            <div class="item">
                                <svg class="icon" width="20" height="20" viewBox="0 0 1024 1024">
                                    <path d="M614.72 554.538c-49.086-6.399-100.27-2.1-149.256-2.1-119.465 0-209.04 95.972-206.84 215.437 0 17.095 8.498 31.99 23.493 40.488 14.896 10.697 34.09 14.896 53.285 17.095 61.882 6.398 123.664 6.398 198.342 6.398 40.488 0 93.872-2.1 142.858-4.298 27.692 0 53.284-4.3 78.877-14.896 19.194-8.498 29.89-19.194 31.99-40.488 8.498-104.57-72.478-204.84-172.75-217.636zM680.8 375.39c0-87.474-74.678-162.053-164.251-162.053-89.574 0-162.053 74.679-162.053 162.053-2.1 87.474 74.678 164.252 162.053 164.252 89.673 0 164.252-74.678 164.252-164.252z"
                                          fill="#FFF"></path>
                                    <path d="M512.35 0C228.733 0 .5 228.233.5 511.85s228.233 511.85 511.85 511.85 511.85-228.233 511.85-511.85S795.967 0 512.35 0zm275.12 772.074c-2.1 21.294-12.797 31.99-31.991 40.488-25.593 10.697-51.185 14.896-78.877 14.896-49.086 2.099-102.37 4.298-142.858 4.298-74.678 0-136.46 0-198.342-6.398-19.195-2.1-38.389-6.398-53.285-17.095-14.895-8.497-23.493-23.493-23.493-40.488-2.1-119.465 87.475-215.437 206.84-215.437 49.085 0 100.27-4.299 149.256 2.1 100.27 12.896 181.247 113.166 172.75 217.636zM354.495 375.39c0-87.474 72.479-162.053 162.053-162.053S680.8 288.016 680.8 375.39c0 89.574-74.679 164.252-164.252 164.252-87.375 0-164.152-76.778-162.053-164.252z"
                                          fill="#249FF8"></path>
                                </svg>
                                <span>版权属于：</span>
                                <span class="text">{{ article.author.nickname}}</span>
                            </div>
                            <div class="item">
                                <svg class="icon" width="20" height="20" viewBox="0 0 1024 1024">
                                    <path d="M0 512a512 512 0 1 0 1024 0A512 512 0 1 0 0 512z" fill="#F3B243"></path>
                                    <path d="M540.672 323.584a90.112 90.112 0 1 0 180.224 0 90.112 90.112 0 1 0-180.224 0zM540.672 688.128a90.112 90.112 0 1 0 180.224 0 90.112 90.112 0 1 0-180.224 0zM229.376 512a90.112 90.112 0 1 0 180.224 0 90.112 90.112 0 1 0-180.224 0z"
                                          fill="#FFF"></path>
                                    <path d="M341.037 480.37l257.344-175.718 27.713 40.592-257.34 175.718z"
                                          fill="#FFF"></path>
                                    <path d="M349.053 488.452L601.907 670.56l-28.725 39.887L320.307 528.34z"
                                          fill="#FFF"></path>
                                </svg>
                                <span>作品采用：</span>
                                <span class="text">
                                    <a class="link" :href="article.authorizationUrl" target="_blank">{{ article.authorization }}</a>
                                    许可协议授权
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Aside/>
        </div>
    </div>
</template>

<script>
    import Aside from '@/views/Aside'
    import crud from '@/mixins/crud'
    import prismjs from '@/assets/js/prism'
    import {parseTime, toThousands} from '@/utils'


    export default {
        name: "index",
        components: {
            Aside
        },
        props: {
            articleId: {
                type: String,
                required: true
            }
        },
        mixins: [crud],
        data() {
            return {
                url: 'api/blog',
                article: {},
                articleHtml: '',
                data_status: false
            }
        },
        methods: {
            parseTime,
            toThousands
        },
        created() {
            this.params['id'] = this.articleId
            this.init().then(res => {
                this.article = res.content[0]
                this.articleHtml = this.article.contentHtml
                console.log('哈哈:', this.articleHtml)
                this.data_status = true
            })
        },
        updated() {
            // 代码高亮
            prismjs.highlightAll()
        }
    }
</script>

<style lang="scss">
    .m_container {
        .m_container_breadcrumb {
            padding-top: 15px;

            .m_breadcrumb_bread {
                display: flex;
                align-items: center;

                .item {
                    color: var(--minor);
                    white-space: nowrap;

                    .icon {
                        width: 15px;
                        height: 15px;
                        min-width: 15px;
                        min-height: 15px;
                        fill: var(--routine);
                        margin-right: 2px;
                    }

                    .link {
                        color: var(--routine);
                        transition: color 0.35s;
                    }

                    .link:hover {
                        color: var(--theme)
                    }
                }

                .item:first-child {
                    display: flex;
                    align-items: center;
                }

                .line {
                    color: var(--seat);
                    padding: 0 6px;
                }
            }
        }

        .m_container_index {
            .title {
                font-size: 24px;
                color: var(--main);
                text-shadow: var(--text-shadow);
                text-align: center;
                margin-bottom: 15px;
                word-break: break-word;
            }

            .information {
                display: flex;
                align-items: center;
                padding-bottom: 15px;
                border-bottom: 1px solid var(--classC);

                .avatar {
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    margin-right: 10px;
                    border: 1px solid var(--classA);
                    -o-object-fit: cover;
                    object-fit: cover
                }

                .meta {
                    display: flex;
                    flex-direction: column;
                    height: 35px;
                    justify-content: space-between;
                    font-size: 13px;

                    .author {
                        .link {
                            font-weight: 500;
                            color: var(--theme);
                        }

                        .item {
                            color: var(--minor);
                            line-height: 16px;

                            .line {
                                color: var(--seat);
                                margin: 0 7px;
                                vertical-align: middle;
                            }
                        }
                    }
                }
            }

            .prompt {
                padding-top: 15px;

                .prompt_wrapper {
                    background: #fffcef;
                    border-radius: var(--radius-inner);
                    padding: 15px;
                    color: #db7c22;
                    border: 1px solid #ffbb76;

                    .prompt_title {
                        display: flex;
                        align-items: center;
                        margin-bottom: 10px;
                        font-size: 15px;
                        font-weight: 500;
                    }

                    .prompt_content {
                        padding-left: 28px;
                    }
                }
            }

            .article_detail {
                padding-top: 15px;
                font-size: 15px;
                word-break: break-word;
                color: var(--routine);

                a {
                    color: var(--theme);
                }

                p {
                    line-height: 26px !important;
                    margin-bottom: 18px !important;
                }

                li {
                    list-style: inherit;
                    line-height: 26px !important;
                    margin-bottom: 18px;
                    margin-left: 20px;
                }

                img {
                    padding-top: 10px;
                }

                pre {
                    margin-bottom: 18px !important;
                }

                pre[class*='language-'] {
                    font-size: 14px;
                    border-radius: var(--radius-inner);
                    overflow: hidden;
                }

                img {
                    display: block;
                    max-width: 100%;
                    border-radius: var(--radius-inner);
                    transition: transform 0.35s, box-shadow 0.35s, -webkit-transform 0.35s;
                    cursor: zoom-in;
                    margin: 0 auto;
                }

                img:hover {
                    -webkit-transform: translateY(-5px);
                    transform: translateY(-5px);
                    box-shadow: 0 34px 20px -24px rgba(136, 161, 206, 0.3)
                }

                code {
                    display: block;
                    overflow: auto;
                    padding: 0 15px;
                }

                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    color: var(--main);
                    font-size: 18px;
                    line-height: 24px;
                    margin-bottom: 18px;
                    position: relative
                }

                h1 {
                    padding: 0 15px 0 20px
                }

                h1::before {
                    content: '';
                    position: absolute;
                    top: 10%;
                    bottom: 10%;
                    left: 0;
                    width: 4px;
                    border-radius: 2px;
                    background: var(--theme)
                }

                h2 {
                    padding: 0 15px
                }

                h2::before {
                    content: '';
                    position: absolute;
                    top: 10%;
                    bottom: 10%;
                    left: 0;
                    width: 4px;
                    border-radius: 2px;
                    background: var(--theme)
                }

                h3 {
                    padding: 0 15px;
                }

                h3::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    width: 4px;
                    background: var(--theme);
                    border-radius: 0 4px 4px 0
                }

                h4::before {
                    content: '「';
                    color: var(--theme);
                    font-weight: 600;
                    margin-right: 5px
                }

                h4::after {
                    content: '」';
                    color: var(--theme);
                    font-weight: 600;
                    margin-left: 5px
                }

                h5 {
                    padding: 0 15px 0 28px
                }

                h5::before {
                    content: '';
                    position: absolute;
                    top: 2px;
                    left: 0;
                    width: 20px;
                    height: 20px;
                    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAC8klEQVRYR+3WP2gTURwH8O/vKnVRRHKXP52cBO3g4p/BqYNIhy4muajUQRBFKjQV1En6ZxJBcmlRCoJDRe3FDiJVwamLS3FwqbgIgss1l2ZQF5XeT3I1Z3NJ7u5dLlAwN9699/t97vfe7/EIO/yhHe5DD9jpCv3fFVTu856+Xzi62Y/35hj9CFPNrlUwWeRJAJfBGADwBcBNI0/PRZFdAdo4xlQLjCqKjBzogat7hZCRAgPghJGBgbFnxglAOvS7b/fLb+q+qnv5BHBCyEBAWTdnANy2IxOtWSC1qsY+1jOFwAVG+gIVvXyHQbcaKuZCxmf5iMQogXFQtEsBeO5JT6BcMu+Bcb1lUhcyqfExACUAB6JEtgUqi+U5JrrmmcyFHCjwSYtQO+tSUSFbAmXdnAdwJVASdyWLPAS2kbFA8xsHNS13EzCmlx8R6KJQcBcypfFpho3cKxRna3ADsgEo6+ZjAKMhgjZ1d2KWR2gTSyD0h4jnIB2gXDIXwciFCPZvSnMl0wwshYrJGDImaMUGKovlLBPVOrDjh8APzFx8zDkjNa7FzYoGZsKT9XEarQOHmei1aJA246cqOWW6/i2l8VMGzoWIPW/k6eq2Ja6UwCz8pw2JGZ8sS8pUz8fWau/jGp+SgLchcGBgZD1Py41NUuoI+ZloV8ZU93+ogZKzfBiWfXAPCgMJU8Y42avQdMzI4ZBfmSizocqrUeJaAmsvBZGGBCtTziXeRY1rCxRAViEhXckqK93AeQJ9kYTvlmVlqmcTdhNEtefc+9X3utVmuX+CkK6oyqtu4nwrWP8bF5IZdGYjJ79wDuMCz4D+XmhFWnZbt7ab5ltBB6mbkyAaBPFCJassuwMmNb4L4EZgXwBc4AoGTZrUeA6A9x1yK6tzzvnFDlxBv0D176kCP2TCpbbjBXCRV9DZk0VeAONCE1IQ1zWg3dlF1sFQHWQIXFeBNrLAw5BwHBZWjQl6E3SbbB8X+R4Mg/Ca0wN2WtFeBTut4B84mFI4VpekyAAAAABJRU5ErkJggg==");
                    background-size: 100% 100%
                }

                h6 {
                    padding: 0 15px 0 28px
                }

                h6::before {
                    content: '';
                    position: absolute;
                    top: 2px;
                    left: 0;
                    width: 20px;
                    height: 20px;
                    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEI0lEQVRYR+3Xb2wTZRwH8G/vL22RPy5GW8fK6rJpGeFFY9RO3TRRE1HfmEAammEyjZmOSEg1RrPZaTD6xjhU/Ndlf0CZgwmD+qcgZBRIETeqY0Vcnc7pGonhRY2l3m2t5upqjq693l2vcy+8N81zz/NcPvf75fd7rjos8ku3yH34HyjK0PqlDLPzD56vMNL0VHxmpgXAoUIZXKgI3sMSpK+cNTAbylaj/9IkprnLM3+mkg8XQi4EsJ4lSL+ZNbAfVd+JG/XLcSERg3M8IAtZauBtDEkeNdN6fX9NfRqXueQiSwm00wQRMDMGw94snBJkqYBrSYIIXs/ojftqGq6IXHZRFIpkKYC2JSw9SJE663W0nthlqcMawwrJYpVCag1M48pNy1YNvLWRffGNIYSCv6Cnog7rjCtVIbUEXoG7qeqaNMj51F58dWoKPZY62JeWyUJG+ctcIplcIizWCpgTl9EIyODJn9BtceDWq/6B57tO/H4R688fFaZ7AWzWAiiJEyMDx39Ed6UDdyy7Ni/w1ekxbP95VJi/F8CRYoGycGLksaEJdFU6cPdy0zxkR/RbtE6FhPvHATQUm2JFODHSfyyCLmsd7lth/hf53q/jcE8OC+NTAG7PTKiNoCqcGPnpF+PotDrwwNXl+OC3H9A8cVqYPgPgFnFo1QCLwomRg4cvoPMGBzZHTgq3zwKwZ+ddKVATXAZhf+gdnPvuojAUqmJdrspRAtQU93pXEM+8clgwhQHU5itruUBNcTt6TsP9sl8weQC0S/VFOUBNcW/2folt2z+XhZPTZh6kSKJ79aqVRuFszRxfUm8sNbdz9xlsfekz2bhCQBvDMMM8z+ubN92Mjrb71brS+97dM4wtnk8U4SSBBEGErVarzeVywePxoHVLA1pb6lUh3+8bwZMv+BTjpIAVACa9Xq+uqakJ7e3tqpGd/WfR3Jr+81awIJS0mY0A+sLhMGw2W3qfGmTXvhAef/6gapxUBDuqqqoejUQiBvFbKUH2DHyNx54bLAqXF0jT9HBjY6Pd6/XOi7oc5K7936Dp2QNF4/IBrTqdLuLxeIi2tracRSGF/PDgKB55er8muHzATQB2m81m+P1+1NbmPoVyIfsOnUOj+2PNcPmAO1iWbeE4TmexWODz+WQhayrL4No2oCkuJ5Bl2VGO49ZmcisXObdeVSuRaq7ZZ3G10KBTqRQl3pQPGY1GEQgE4HQ6heVDAO5S1cklNmUDXQRB9KZSqXkfESaTCW63G7FYDKFQKDEyMoJoNKqfe/bbAJ7QGpcrxa8xDLOV5/k0kGXZv2ZnZ5FMJtNjmqYvURR1IpFInAcwAeD7ud/pUuDmAY1G41g8Hl9DkmScoqggx3FHAIyJMMlSQfI9V5zKagDC93dsoRFKimQx2dIWOV/U/yn6bx0WyDj8vgLOAAAAAElFTkSuQmCC");
                    background-size: 100% 100%
                }

                blockquote {
                    line-height: 26px;
                    margin-bottom: 18px;
                    background: #ecf8ff;
                    border-left: 5px solid #50bfff;
                    color: #50bfff;
                    padding: 8px 15px;
                    border-radius: 0 var(--radius-inner) var(--radius-inner) 0
                }
            }

            .article_tags {
                margin-bottom: 15px;
                color: var(--routine);
                display: flex;
                align-items: center;
                flex-shrink: 0;
                display: flex;
                align-items: center;
                overflow-x: auto;
            }

            .article_tags::-webkit-scrollbar {
                display: none;
            }

            .article_tags a {
                flex-shrink: 0;
                position: relative;
                margin-right: 10px;
                font-size: 12px;
                background-color: var(--classD);
                color: var(--minor);
                border: 1px solid var(--classD);
                padding-right: 8px;
                padding-left: 29px;
                height: 26px;
                line-height: 26px;
                border-radius: 13px;
                max-width: 125px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                transition: border 0.25s, color 0.25s;
            }

            .article_tags a:hover {
                color: var(--routine);
                border: 1px solid var(--classC)
            }

            .article_tags a::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 24px;
                height: 24px;
                background: var(--background);
                border-radius: 50%;
            }

            .article_tags a::after {
                content: '';
                position: absolute;
                top: 50%;
                left: 12px;
                -webkit-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
                width: 12px;
                height: 12px;
                background: url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTUiIGhlaWdodD0iMTUiPjxwYXRoIGQ9Ik02ODIuNjY3IDM1Ni44NDhIMzI1LjgxOGEzOC43ODggMzguNzg4IDAgMCAxLTM4Ljc4OC0zOC43ODcgMzguNzg4IDM4Ljc4OCAwIDAgMSAzOC43ODgtMzguNzg4aDM1Ni44NDlhMzguNzg4IDM4Ljc4OCAwIDAgMSAzOC43ODggMzguNzg4IDM4Ljc4OCAzOC43ODggMCAwIDEtMzguNzg4IDM4Ljc4N3oiIGZpbGw9IiM1NGI1ZGIiLz48cGF0aCBkPSJNOTA3LjYzNiAxMDI0aC0xNS41MTVMNTEyIDgwNi43ODhsLTM4MC4xMjEgMjA5LjQ1NEg5My4wOWE2Mi4wNiA2Mi4wNiAwIDAgMS0xNS41MTUtMzEuMDNWMTE2LjM2NEExMTYuMzY0IDExNi4zNjQgMCAwIDEgMTkzLjkzOSAwaDYzNi4xMjJhMTE2LjM2NCAxMTYuMzY0IDAgMCAxIDExNi4zNjMgMTE2LjM2NHY4NjguODQ4YTYyLjA2IDYyLjA2IDAgMCAxLTE1LjUxNSAzMS4wM3pNNTEyIDcyMS40NTVoMjMuMjczbDMzMy41NzUgMTg2LjE4MVYxMTYuMzY0YTM4Ljc4OCAzOC43ODggMCAwIDAtMzguNzg3LTM4Ljc4OEgxOTMuOTM5YTM4Ljc4OCAzOC43ODggMCAwIDAtMzguNzg3IDM4Ljc4OHY3OTkuMDNsMzQxLjMzMy0xODYuMTgyeiIgZmlsbD0iIzU0YjVkYiIvPjwvc3ZnPg==) no-repeat;
                background-size: 100% 100%;
            }

            .copyright {
                padding-top: 15px;
                border-top: 1px solid var(--classC);

                .items {
                    background: var(--classD);
                    padding: 15px;
                    border-radius: var(--radius-inner);

                    .item {
                        color: var(--minor);
                        margin-bottom: 5px;
                        word-break: break-word;
                        line-height: 22px;

                        .icon {
                            width: 18px;
                            height: 18px;
                            margin-right: 5px;
                            vertical-align: -4px
                        }

                        .link {
                            color: var(--minor)
                        }

                        .link:hover {
                            color: var(--theme)
                        }
                    }
                }
            }
        }
    }
</style>
