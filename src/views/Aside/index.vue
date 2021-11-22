<template>
    <aside class="m_container_aside m_padded_t_big">
        <!--   博主信息     -->
        <section class="m_container_aside_item author">
            <img class="image"
                 src="https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/assets/img/aside_author_image.jpg"/>
            <div class="user">
                <img class="avatar" :src="user.avatar" alt="博主头像"/>
                <a class="link m_padded_tb_mini" href="#">{{user.nickname}}</a>
                <p class="motto">个人博客,希望对来到这的人有所帮助</p>
                <div class="statistics m_padded_tb_big">
                    <div class="item">
                        <span class="num">{{blogAmount}}</span>
                        <span>文章数</span>
                    </div>
                    <div class="item">
                        <span class="num">{{commentAmount}}</span>
                        <span>评论数</span>
                    </div>
                </div>
            </div>
        </section>
        <!--   音乐播放器     -->
        <section class="m_container_aside_item player">
            <div class="title">
                <svg t="1628152000205" class="icon m_margin_lr_mini" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="3394" width="20" height="20">
                    <path d="M951.1 0L308.4 147.2v127.5h-0.5v481.6c-24.3-17.5-53.9-28.1-86.1-28.1C140.2 728.2 74 794.4 74 876s66.2 147.8 147.8 147.8S369.6 957.7 369.6 876c0-7.5-1.1-14.7-2.2-22h2.2V346.1l519.7-119V648c-24.3-17.5-53.9-28.1-86.1-28.1-81.6 0-147.8 66.2-147.8 147.8s66.2 147.8 147.8 147.8c81.6 0 147.8-66.2 147.8-147.8 0-7.5-1.1-14.7-2.2-22h2.2V0z"
                          fill="#9999FF" p-id="3395"></path>
                </svg>
                <span>我的歌单</span>
            </div>
            <MusicPlayer :music="music" :list="musicList"/>
        </section>
        <!--   最近文章     -->
        <section class="m_container_aside_item newest">
            <div class="title">
                <svg t="1634449500843" class="icon m_margin_lr_mini" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="2422" width="20" height="20">
                    <path d="M512.736 992a483.648 483.648 0 0 1-164.672-28.8 36.88 36.88 0 1 1 25.104-69.36 407.456 407.456 0 1 0-184.608-136.512A36.912 36.912 0 0 1 129.488 801.6a473.424 473.424 0 0 1-97.472-290A480 480 0 1 1 512.736 992z"
                          p-id="2423" fill="#1296db"></path>
                    <path d="M685.6 638.592a32 32 0 0 1-14.032-2.96l-178.048-73.888a36.8 36.8 0 0 1-22.912-34.016V236.672a36.944 36.944 0 1 1 73.888 0v266.72l155.2 64.272a36.336 36.336 0 0 1 19.952 48 37.616 37.616 0 0 1-34.048 22.928z"
                          p-id="2424" fill="#1296db"></path>
                </svg>
                <span>最近发布</span>
            </div>
            <div class="container">
                <ul class="list">
                    <li class="item" v-for="item in recentPublish">
                        <a class="link" :href="'/articles/' + item.id" target="_blank" :title="item.title">{{ item.title }}</a>
                        <svg t="1627720308160" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="3097" width="20" height="20">
                            <path d="M444.55783545 377.18475925c30.74001094 0 59.77444005 6.58997029 87.17250026 19.72541697 20.54607348 9.66990385 39.15915441 22.85973118 55.80463852 39.54476436 16.67514576 16.66031421 29.86991717 35.24867761 39.52993285 55.78486364-13.1749965 13.18488395-29.07397894 19.75507933-47.65739822 19.75507934-6.49109576 0-13.06129113-0.98874249-19.72541698-2.91679094a137.16333182 137.16333182 0 0 0-44.79004383-44.77521375c-21.57930914-13.13050331-45.02239865-19.73530442-70.30949432-19.73530442-17.57984526 0-34.58621964 3.33700664-51.09822278 10.01101993-16.49717232 6.68390074-31.22943809 16.51200313-44.24623605 29.51396955L248.11443483 585.20633655c-12.98713559 12.98713559-22.81523799 27.72434546-29.48925055 44.24623603a134.94360384 134.94360384 0 0 0-10.01101992 51.06856043c0 17.55018291 3.33700664 34.58621964 10.01101992 51.06856114 6.67401328 16.52189059 16.50211568 31.25910045 29.48925055 44.24623604 13.00691049 13.00691049 27.74906374 22.83501289 44.2363486 29.51396955a135.14135293 135.14135293 0 0 0 51.1179984 10.00113247c17.56007035 0 34.57633219-3.32217583 51.09822278-9.9961891 16.50211568-6.68390074 31.22943809-16.51200313 44.23634859-29.51396955l70.83352722-70.80880894c22.47412192 6.13020478 45.71946233 9.21013834 69.77062843 9.21013835 3.88081516 0 9.30901287-0.17797344 16.31425478-0.51414615a261.61637531 261.61637531 0 0 1-8.14723957 8.68116136l-101.11377262 101.10882852c-19.51778117 19.47823134-41.57663073 34.22532866-66.24576162 44.24623605A202.04957179 202.04957179 0 0 1 343.46878183 882.76845314c-26.35493708 0-51.953485-5.03764437-76.76598361-15.1475381-24.81249788-10.07528802-46.88123563-24.79272297-66.24576162-44.09792426-19.47823134-19.49800625-34.21049785-41.56674328-44.22646114-66.23587415A202.39563123 202.39563123 0 0 1 141.21157424 680.55573945 202.49450576 202.49450576 0 0 1 156.23057546 603.79469921c10.02090738-24.66913015 24.7482298-46.73786792 44.22646115-66.23092935L301.58564075 436.44999723c1.95771081-1.92804845 4.84483938-4.63720358 8.69104809-8.1472403 18.81083002-16.68503321 39.79195-29.38048927 62.95324816-38.066594 23.17612897-8.65644237 46.96033454-13.03657286 71.36744827-13.03657213l-0.03954982-0.01977492zM680.536113 141.24108814a201.91609152 201.91609152 0 0 1 76.74620872 15.02888867c24.64441189 9.9764142 46.73786792 24.73339898 66.2457609 44.24129269 19.4881188 19.45351234 34.23521612 41.51236265 44.24623604 66.19632362A202.94932719 202.94932719 0 0 1 882.76860161 343.47357673c0 26.33021808-5.05741927 51.90404846-15.12776322 76.74620872-10.11483784 24.82732942-24.81744198 46.90100982-44.13747405 66.19632435L722.37970427 587.52988243c-1.92804845 1.97748572-4.82012038 4.69652758-8.69104881 8.19667682-18.76633684 16.69492067-39.74745683 29.35082692-62.95324744 38.02210083a202.47473085 202.47473085 0 0 1-71.35756153 13.06129114c-30.71529194 0-59.78927159-6.58997029-87.16755617-19.72541696-20.55101684-9.67979131-39.12949277-22.85973118-55.81452599-39.54970848-16.67514576-16.66031421-29.83036735-35.24867761-39.51015793-55.789807C410.0358839 518.56507821 425.92003552 511.98993946 444.53311718 511.98993946c6.48615239 0 13.0909535 0.98874249 19.75507861 2.91679094a136.64424158 136.64424158 0 0 0 44.75049475 44.77521374c21.60897151 13.13050331 45.03723019 19.72541696 70.31938177 19.72541697 17.55018291 0 34.58621964-3.33700664 51.08339123-10.00113247 16.51200313-6.68390074 31.24921299-16.51200313 44.23140522-29.51397027l101.13354753-101.12366008c13.00691049-12.97724814 22.83501289-27.71445801 29.52880037-44.23634787a135.13146547 135.13146547 0 0 0 10.00113247-51.06856114c0-17.56007035-3.33700664-34.5961071-10.00113247-51.06856042-6.69378819-16.52189059-16.52189059-31.25910045-29.52880037-44.24623604-13.0019664-13.00691049-27.72928883-22.83501289-44.24623604-29.5288011a135.17101528 135.17101528 0 0 0-51.0784486-9.99618837c-17.55018291 0-34.58621964 3.33700664-51.08833533 9.99618837-16.51200313 6.69378819-31.24921299 16.52189059-44.22646114 29.5288011l-70.86318956 70.79397739c-22.46423447-6.12031732-45.72440642-9.19530679-69.77062844-9.1953068-3.85609689 0-9.31395623 0.16314263-16.33897377 0.49931461a246.86433461 246.86433461 0 0 1 8.1670152-8.68116064l101.12860344-101.10882853c19.32991953-19.3002579 41.40360065-34.01769285 66.23587416-44.09298087C628.56779645 146.25401351 654.14162611 141.21142578 680.48173165 141.21142578l0.04943727 0.02966236z"
                                  p-id="3098"></path>
                        </svg>
                    </li>
                </ul>
            </div>
        </section>
        <!--   标签     -->
        <section class="m_container_aside_item tags">
            <div class="title">
                <svg t="1627736287417" class="icon m_margin_lr_mini" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="3698" width="20" height="20">
                    <path d="M190.79 701.7L479 170a31.74 31.74 0 0 1 22.6-16.16l210.07-35.47-16.46-37.85a31.72 31.72 0 0 0-34.36-18.63l-235.32 39.74a31.76 31.76 0 0 0-22.6 16.16l-288.2 531.69a44.16 44.16 0 0 0 17.72 59.69L189 739.83a44 44 0 0 1 1.79-38.13z"
                          fill="#9999ff" p-id="3699"></path>
                    <path d="M882.22 367.5l-95.14-218.87A31.7 31.7 0 0 0 752.72 130l-25.25 4.26-210.07 35.48a31.76 31.76 0 0 0-22.6 16.16L206.6 717.59a44.18 44.18 0 0 0 17.72 59.69l308.8 167.39a44.16 44.16 0 0 0 59.69-17.73L881 395.25a31.72 31.72 0 0 0 1.22-27.75zM724.46 223.15a37.29 37.29 0 1 1-50.56 15 37.3 37.3 0 0 1 50.56-15z m-71.77 417.07a12.92 12.92 0 0 1-17.46 5.18L431.42 534.92a12.92 12.92 0 0 1-5.19-17.46l6.14-11.32a12.91 12.91 0 0 1 17.46-5.14l203.81 110.43a12.92 12.92 0 0 1 5.19 17.46z m45-83a12.92 12.92 0 0 1-17.46 5.19l-203.8-110.52a12.92 12.92 0 0 1-5.19-17.46l6.14-11.32a12.92 12.92 0 0 1 17.46-5.19L698.65 528.4a12.92 12.92 0 0 1 5.19 17.46z m45-83a12.92 12.92 0 0 1-17.46 5.18L521.44 368.86a12.92 12.92 0 0 1-5.19-17.46l6.14-11.33a12.92 12.92 0 0 1 17.46-5.18l203.81 110.47a12.91 12.91 0 0 1 5.18 17.46z"
                          fill="#9999ff" p-id="3700"></path>
                </svg>
                <span>标签</span>
            </div>
            <div class="container">
                <div class="tagcould">
                    <a :href="'/tags/' + item.alias" target="_blank" v-for="item in asideTags" :title="item.name">{{ item.name }}</a>
                    <a class="more" href="/tags" target="_blank" v-if="asideTags.length >= 11">更多>></a>
                </div>
            </div>
        </section>
        <!--   二维码     -->
        <section class="m_container_aside_item qrcode">
            <div class="container">
                <el-divider content-position="center">扫码关注我</el-divider>
                <el-image class="image" :src="wechat" lazy/>
            </div>
        </section>
    </aside>
</template>

<script>
    import Avatar from '@/assets/images/avatar.jpeg'
    import Wechat from '@/assets/images/wechat.jpeg'
    import MusicPlayer from "vue-aplayer";
    import { mapGetters } from 'vuex'

    import Test1 from '@/assets/music/test1.mp3'
    import Test2 from '@/assets/music/test2.mp3'
    import Test3 from '@/assets/music/test3.mp3'
    import Test5 from '@/assets/music/test5.mp3'

    export default {
        name: "index",
        components: {
            MusicPlayer
        },
        computed: {
            ...mapGetters([
                'user',
                'blogAmount',
                'commentAmount',
                'recentPublish',
                'asideTags',
            ])
        },
        data() {
            return {
                avatar: Avatar,
                wechat: Wechat,
                music: {
                    title: '所念皆星河',
                    artist: '糖丫丫',
                    src: Test1,
                    pic: 'https://p3.music.126.net/M34HFzLO2xhDLuX_zEALKA==/109951164291347934.jpg?param=240y240&type=webp',
                },
                musicList: [
                    {
                        title: '所念皆星河',
                        artist: '糖丫丫',
                        src: Test1,
                        pic: 'https://p3.music.126.net/M34HFzLO2xhDLuX_zEALKA==/109951164291347934.jpg?param=240y240&type=webp',
                    },
                    {
                        title: '梦中的婚礼',
                        artist: 'Richard Clayderman',
                        src: Test2,
                        pic: 'https://p3.music.126.net/M34HFzLO2xhDLuX_zEALKA==/109951164291347934.jpg?param=240y240&type=webp',
                    },
                    {
                        title: '夜的钢琴曲',
                        artist: '文武贝',
                        src: Test3,
                        pic: 'https://p3.music.126.net/M34HFzLO2xhDLuX_zEALKA==/109951164291347934.jpg?param=240y240&type=webp',
                    },
                    {
                        title: '遇见(钢琴版)',
                        artist: 'None',
                        src: Test5,
                        pic: 'https://p3.music.126.net/M34HFzLO2xhDLuX_zEALKA==/109951164291347934.jpg?param=240y240&type=webp',
                    }
                ],
                newestArticle: {
                    title: "Spring系列之Mybatis接口代理的实现全过程"
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .m_container_aside {
        margin-left: 15px;
    }

    .m_container_aside_item {
        background: var(--background);
        position: relative;
        width: 280px;
        margin-bottom: 15px;
        box-shadow: var(--box-shadow);
        overflow: hidden;

        .title {
            display: flex;
            align-items: center;
            border-bottom: 1px solid var(--classC);
            font-size: 15px;
            font-weight: 500;
            height: 45px;
            line-height: 45px;
            color: var(--main);
        }

        .container {
            position: relative;
            padding: 1em;
        }
    }

    .m_container_aside_item.author {
        padding: 45px 15px 15px;

        .image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100px;
            object-fit: cover;
            z-index: 1
        }

        .user {
            position: relative;
            z-index: 4;
            display: flex;
            flex-direction: column;
            align-items: center;

            .avatar {
                width: 75px;
                height: 75px;
                border-radius: 50%;
                overflow: hidden;
                -o-object-fit: cover;
                object-fit: cover;
                transition: -webkit-transform 0.75s;
                transition: transform 0.75s;
                background: var(--background);
                padding: 5px;
            }

            .avatar:hover {
                -webkit-transform: rotate(360deg);
                transform: rotateY(360deg)
            }

            .link {
                color: var(--theme);
                font-size: 16px;
                font-weight: 500;
            }

            .link:hover {
                text-decoration: underline;
            }

            .motto {
                color: var(--main);
                text-align: center;
                word-break: break-word;
            }
        }

        .statistics {
            width: 100%;
            display: flex;
            align-items: center;
            border-bottom: 1px solid var(--classC);

            .item:first-child {
                border-right: 1px solid var(--classC);
            }

            .item {
                min-width: 0;
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                color: var(--routine);
                font-size: 12px;

                .num {
                    font-size: 22px;
                    font-weight: 500;
                    max-width: 70px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    color: var(--main);
                    text-shadow: var(--text-shadow)
                }
            }
        }

    }

    .m_container_aside_item.newest {
        .container {
            .list {
                .item {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    line-height: 20px;
                    margin-bottom: 1em;

                    .link {
                        color: var(--routine);
                        max-width: 85%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }

                    .link:hover {
                        color: var(--theme);
                    }
                }

                .item:last-child {
                    margin-bottom: 0;
                }

                .item::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 1px;
                    background: var(--theme);
                    transition: all 0.3s;
                }

                .item:hover::after {
                    width: 100%;
                }
            }
        }
    }

    .m_container_aside_item.qrcode {
        .image {
            display: flex;
            width: 11em;
            margin: 0 auto;
        }
    }

    .m_container_aside_item.tags {
        .title {

        }

        .container {
            .tagcould a {
                position: relative;
                display: inline-block;
                width: 30%;
                padding: 5px;
                margin-left: 0.3em;
                font-size: 13px !important;
                line-height: 1.2;
                color: var(--minor);
                background: rgba(255, 255, 255, .2);
                border: 1px solid var(--theme);
                border-radius: 2px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-align: center;
                background: linear-gradient(to right, var(--theme) 50%, rgba(255, 255, 255, .2) 50%);
                background-size: 201% 100%;
                background-position: right bottom;
            }

            .more {
                color: orange !important;
            }

            .tagcould a:hover {
                color: #fff;
                background-position: left bottom;
                transition: all 0.3s;
            }
        }


    }
</style>
