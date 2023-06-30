<template>
    <div id="app">
        <button @click="get">Click</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'App',
    components: {},
    methods: {
        get() {
            axios({
                method: 'get',
                /* 注意：访问的是代理服务器的URL，代理服务器进行转发请求 */
                url: 'http://localhost:8080/api/getHello',
            }).then(
                (response) => {
                    console.log('请求成功：' + response.data);
                },
                (err) => {
                    console.log('请求失败：' + err.message);
                }
            );
        },
    },
};
</script>
