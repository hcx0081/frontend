<template>
    <div>
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <!-- 字符串写法 -->
                <!-- <router-link :to="`/home/news/newsDetail?id=${news.id}&title=${news.title}`">{{ news.title }}</router-link> -->

                <!-- 对象写法 -->
                <router-link
                        :to="{
            path: '/home/news/newsDetail',
            query: {
              id: news.id,
              title: news.title,
            },
          }"
                >{{ news.title }}
                </router-link>

                <button @click="pushShow(news.id, news.title)">pushShow</button>
                <button @click="replaceShow(news.id, news.title)">replaceShow</button>

                <input type="text"/>
            </li>
        </ul>
        <hr/>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'News', // 组件名称
    data() {
        return {
            newsList: [
                {id: '001', title: 'News001'},
                {id: '002', title: 'News002'},
            ],
        };
    },

    /* 编程式路由导航 */
    methods: {
        pushShow(id, title) {
            this.$router.push({
                name: 'newsDetail',
                query: {
                    id,
                    title,
                },
            });
        },
        replaceShow(id, title) {
            this.$router.replace({
                name: 'newsDetail',
                query: {
                    id,
                    title,
                },
            });
        },
    },
};
</script>
