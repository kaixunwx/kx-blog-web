<template>
    <el-carousel indicator-position="outside" :interval="5000">
        <el-carousel-item v-for="i in 4">
            <a href="#">
                <el-image :src="images[0]" lazay/>
            </a>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
        name: "Carousel",
        props: {
            images: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .el-carousel__item {
        text-align: center;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
