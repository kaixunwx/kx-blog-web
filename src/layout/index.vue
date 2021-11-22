<template>
    <div>
        <!--  返回顶部定位使用      -->
        <div class="top_div"></div>
        <!--  导航栏      -->
        <NavBar/>
        <!--  主内容      -->
        <AppMain/>
        <!--  Action      -->
        <Action />
        <!--  页脚      -->
        <Footer/>
    </div>
</template>

<script>
    import {NavBar, AppMain,Action, Footer} from "./components";

    export default {
        name: "index",
        components: {
            NavBar,
            AppMain,
            Action,
            Footer
        }
    }
</script>

<style lang="scss" scoped>

</style>
