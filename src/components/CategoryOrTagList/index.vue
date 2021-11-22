<template>
    <ul class="m_category_list m_padded_t_big">
        <li class="item m_padded_t_big" v-for="item in items">
            <a :href="is_category ? '/categories/' + item.alias : '/tags/' + item.alias" class="link" target="_blank">
                <figure class="inner">
                    <img class="image" :src="item.thumbnail ? item.thumbnail: defaultThumbnail" alt="">
                    <figcaption class="title">{{item.name}}</figcaption>
                </figure>
            </a>
        </li>
    </ul>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "CategoryOrTagList",
        props: {
            items: {
                type: Array,
                required: true
            },
            is_category: {
                type: Boolean,
                required: true
            }
        },
        computed: {
            ...mapGetters([
                'defaultThumbnail',
            ])
        },
    }
</script>

<style lang="scss" scoped>
    .m_category_list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        -webkit-column-gap: 15px;
        column-gap: 15px;

        .item {
            overflow: hidden;
        }

        .link {
            .inner {
                position: relative;

                .image {
                    width: 100%;
                    height: 120px;
                    object-fit: cover;
                    transition: opacity 0.3s;
                    border-radius: var(--radius-inner) var(--radius-inner) 0 0;
                }

                .title {
                    font-size: 13px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    text-align: center;
                    padding: 0 8px;
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
