<template>
    <!--   文章列表         -->
    <div class="m_list_container">
        <div class="m_list_title">
            <svg t="1636395178431" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="2350" width="15" height="15">
                <path d="M324.955119 44.947525h369.099932c25.04461 0 117.655864-5.831593 129.232271 4.673085 8.096542 7.345898 5.579932 29.726373 5.579932 44.869424 0 36.508203 7.406644 115.690305-7.437017 137.415593-32.785356 9.662915-85.512678 2.802983-123.661017 2.802983h-258.460203c-24.098712 0-113.386305 6.000814-125.509424-3.740203-8.313492-6.677695-5.579932-28.268475-5.579932-42.999322 0-29.613559-6.634305-133.46278 10.226983-141.155797z m35.328 46.739526v87.868746h207.329627V91.687051H360.283119z m-38.117966 181.347796h368.171389c24.836339 0 119.669153-6.222102 132.022238 3.740204 11.910508 9.602169 6.508475 114.427661 6.508474 141.151457 0 16.219119 2.230237 35.436475-8.369898 41.13356-10.296407 8.725695-83.24339 3.740203-104.135593 3.740203H425.363525c-23.742915 0-106.018712 5.150373-113.425356-7.480407-6.898983-7.614915-3.718508-31.995661-3.718508-45.806644l0.928542-126.194983c2.282305-5.827254 7.771119-7.293831 13.01695-10.28339z m38.117966 43.936543c-0.216949 13.884746-3.176136 82.145627 1.861423 87.868746h205.468204V316.97139H360.283119z m-36.256543 181.347796H768.433898c8.183322 0 25.443797-2.477559 28.823865 2.807322-35.349695 14.531254-45.294644 49.989424-66.941831 78.535594l-16.735457-19.62956a162.395119 162.395119 0 0 0-70.660339-43.003661c-31.748339-9.025085-76.925831-4.673085-115.28678-4.673084H309.148203c2.030644-9.836475 7.341559-9.910237 14.878373-14.036611z m544.820068 41.13356c69.16339-1.06739 123.088271 64.772339 105.988339 140.218576-9.767051 43.077424-39.33722 85.005017-62.29478 117.781695-46.821966 66.85939-109.116746 126.29478-198.959728 149.551729-60.038508 15.576949-156.385627 6.551864-227.796611 6.551864q-87.85139 0.455593-175.728813 0.954576c-21.182915 0-54.206915 4.295593-63.223322-8.417627-9.628203-13.581017-4.65139-116.957288-4.647051-144.900339v-168.261423c0-24.085695-3.527593-52.302102 13.945491-58.893017l159.913221-0.932882h137.59783c33.184542 0 68.360678-1.787661 92.042848 7.476068 22.99661 8.999051 39.51078 28.637288 51.134915 49.546848a117.282712 117.282712 0 0 1 13.945492 71.979389c40.556475-31.284068 50.696678-88.168136 83.677288-127.132203a117.03539 117.03539 0 0 1 48.344949-31.783051zM46.03661 547.866034l171.997288 0.932881v305.677017c0 25.973153 5.809898 108.973559-1.857084 126.199322q-85.044068-0.455593-170.140204-0.954576v-431.854644z m238.939119 359.914305h275.2c50.939661 0 110.023593 4.772881 150.614779-7.480407 72.526102-21.868475 121.009898-68.534237 160.841763-123.392 20.297763-27.951729 78.496542-99.727186 58.576271-150.501966-11.98861-30.555119-54.037695-54.974915-91.118644-31.783051-23.430508 14.657085-32.108475 50.848542-46.487864 74.782373-27.930034 46.453153-61.531119 89.725831-121.795254 103.762441h-204.539661c-25.30061 0-57.374373 5.007186-64.147526-14.023593-12.179525-34.208542 28.88461-31.78739 58.576271-31.783051h137.597831c16.783186 0 45.594034 4.260881 58.576271-1.865763l11.159865-26.177085c7.684339-33.805017-16.370983-67.518915-38.122306-75.719593-18.106576-6.820881-44.691525-4.673085-68.798915-4.673085H435.590508l-150.614779 0.937221v287.917559zM130.64678 597.408542c-12.643797 6.330576-22.397831 7.324203-27.890983 20.56678-9.341831 22.510644 6.747119 51.074169 30.680949 48.59661 41.502373-4.26522 39.758102-63.353492-2.789966-69.16339z"
                      fill="#00173C" p-id="2351"></path>
            </svg>
            <span v-if="this.is_category" class="muted">{{this.title}}</span>
            <span v-else class="muted">{{this.title}}</span>
            <span>的相关文章</span>
        </div>
        <div class="m_category_list_list m_padded_b_large">
            <ArticleList :articles="this.articles"/>
            <!--分页组件-->
            <div class="m-pagination">
                <Pagination :page="page" :size="size" :total="total" @pageChangeHandler="pageChange"/>
            </div>
        </div>
    </div>
</template>

<script>
    import ArticleList from '@/components/ArticleList'
    import Pagination from '@/components/Pagination'
    import mixins from '@/mixins/crud'

    export default {
        name: "List",
        components: {
            ArticleList,
            Pagination
        },
        props: {
            alias: {
                type: String,
                required: true
            }
        },
        mixins: [mixins],
        data() {
            return {
                size: 9,
                articles: []
            }
        },
        created() {
            this.initData()
        },

        methods: {
            initData() {
                this.params['alias'] = this.alias
                // 判断是分类页还是标签页
                if (this.$route.path.indexOf("categories") !== -1) {
                    this.is_category = true
                    // 首先查询出当前type对象
                    this.url = 'api/type'
                    this.init().then(res => {
                        this.title = res.content[0].name
                        this.params.typeId = res.content[0].id
                        // 根据type_id再查询相关blog
                        this.getArticles()
                    })
                }
                if (this.$route.path.indexOf("tags") !== -1) {
                    this.is_category = false
                    // 首先查询出当前tag对象
                    this.url = 'api/tag'
                    this.init().then(res => {
                        this.title = res.content[0].name
                        this.params.tagId = res.content[0].id
                        // 根据tag_id再查询相关blog
                        this.getArticles(res, this.is_category)

                    })
                }
            },
            getArticles() {
                this.url = 'api/blog'
                this.sort = ['isTop,desc', 'createTime,desc']
                this.init().then(res => {
                    this.articles = res.content
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .m_list_container {
        .m_list_title {
            position: relative;
            display: flex;
            align-items: center;
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid var(--classC);

            .muted {
                color: var(--theme);
                font-size: 15px;
                font-weight: 500;
                margin: 0 5px;
            }
        }
    }
</style>
