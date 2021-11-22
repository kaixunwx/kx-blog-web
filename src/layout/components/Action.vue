<template>
    <div class="m_action">
        <div class="item scroll" @click="scrollToTop">
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                <path d="M725.902 498.916c18.205-251.45-93.298-410.738-205.369-475.592l-6.257-3.982-6.258 3.414c-111.502 64.853-224.711 224.142-204.8 475.59-55.751 53.476-80.214 116.623-80.214 204.8v15.36l179.2-35.27c11.378 40.39 58.596 69.973 113.21 69.973 54.613 0 101.262-29.582 112.64-68.836l180.337 36.41v-15.36c-.569-89.885-25.031-153.6-82.489-206.507zM571.733 392.533c-33.564 31.29-87.04 28.445-118.329-5.12s-28.444-87.04 5.12-117.76c33.565-31.289 87.04-28.444 118.33 5.12s28.444 86.471-5.12 117.76zm-56.32 368.64c-35.84 0-64.284 29.014-64.284 64.285 0 35.84 54.044 182.613 64.284 182.613s64.285-146.773 64.285-182.613c0-35.271-29.014-64.285-64.285-64.285z"></path>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Action",
        methods: {
            scrollToTop() {
                document.getElementsByClassName("top_div")[0].scrollIntoView();
            },
            handleScroll() {
                const scroll = document.documentElement.scrollTop || document.body.scrollTop;
                const topButton = document.getElementsByClassName('item scroll')[0]
                if(scroll >= 400) {
                    topButton.setAttribute('class', 'item scroll active')
                } else {
                    topButton.setAttribute('class', 'item scroll')
                }
            }
        },
        mounted() {
            window.addEventListener("scroll", this.handleScroll);
        }
    }
</script>

<style lang="scss" scoped>
    .m_action {
        position: fixed;
        bottom: 90px;
        right: 30px;
        z-index: 99;

        .item {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background: var(--background);
            border-radius: 50%;
            cursor: pointer;
            margin-top: 15px;
            box-shadow: 0 0 10px rgb(0 0 0 / 10%), 0 5px 20px rgb(0 0 0 / 20%);

            svg {
                fill: var(--theme);
            }
        }

        .item.scroll {
            visibility: hidden;
            -webkit-transform: scale(0);
            transform: scale(0);
            transition: visibility 0.35s, -webkit-transform 0.35s;
            transition: visibility 0.35s, transform 0.35s;
            transition: visibility 0.35s, transform 0.35s, -webkit-transform 0.35s;
        }

        .item.scroll.active {
            visibility: visible;
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
</style>
