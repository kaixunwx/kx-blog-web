<template>
    <header class="m_header">
        <div class="m_container">
            <a href="#" title="KX-BLOG" class="m_header_logo">
                <img :src="logo" class="m_header_logo_image">
            </a>
            <el-menu class="m_header_nav" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">分类</el-menu-item>
                <el-menu-item index="3">标签</el-menu-item>
                <el-menu-item index="4">归档</el-menu-item>
            </el-menu>
            <form class="m_header_search">
                <input class="m_header_search_input" type="text" placeholder="输入关键字...">
                <button type="submit" class="submit">搜索</button>
            </form>
        </div>
    </header>
</template>

<script>
    import Logo from '@/assets/images/logo.jpeg'

    export default {
        name: "NavBar",
        data() {
            return {
                logo: Logo,
                activeIndex: '1',
                activeIndex2: '1'

            }
        },
        methods: {
            handleSelect(key) {
                switch (key) {
                    case '1':
                        window.location.href ='/'
                        break
                    case '2':
                        window.open('/categories')
                        break
                    case '3':
                        window.open('/tags')
                        break
                    case '4':
                        window.open('/archives')
                        break
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    /*-----header----*/
    .m_header {
        position: -webkit-sticky;
        position: sticky;
        height: 60px;
        top: 0;
        z-index: 1000;
        align-items: center;
        background: #fff;
        box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);
        transition: top 0.35s;

        .m_container {
            .m_header_logo {
                position: relative;
                display: flex;
                align-items: center;
                height: 60px;
                padding-right: 15px;
                margin-right: 15px;
                .m_header_logo_image {
                    max-width: 150px;
                    max-height: 60px;
                }
            }
            .m_header_logo::after {
                content: '';
                position: absolute;
                top: 50%;
                right: 0;
                width: 1px;
                height: 20px;
                background: var(--classC);
                transform: translateY(-50%);
            }
            .m_header_search {
                position: relative;
                margin-left: auto;
                display: flex;
                align-items: center;
                .m_header_search_input {
                    background: var(--classC);
                    width: 170px;
                    height: 34px;
                    border: 1px solid transparent;
                    padding: 0 14px;
                    color: var(--routine);
                    transition: background-color 0.35s, border-color 0.35s, padding-right 0.35s;
                }
                .m_header_search_input:focus {
                    background: var(--background);
                    border-color: var(--theme);
                }
                .submit {
                    position: relative;
                    width: 60px;
                    height: 34px;
                    border: none;
                    background: var(--theme);
                    color: var(--classC);
                }
            }
        }
    }

    .el-menu-item {
        font-size: 15px;
        transition: color 0.35s;
        white-space: nowrap;
        color: var(--main) !important;
        border-bottom: none !important;
    }

    .el-menu-item::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 3px;
        transition: opacity 0.5s, transform 0.5s, -webkit-transform 0.5s;
        border-radius: 6px 6px 0 0;
        opacity: 0;
        -webkit-transform: scaleX(0.25);
        transform: scaleX(0.25);
        background: var(--theme)
    }

    .el-menu-item:hover {
        color: var(--theme) !important;
    }

    .el-menu-item:hover::after {
        opacity: 1;
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }

</style>
