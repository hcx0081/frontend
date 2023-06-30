<template>
    <div>{{ name }}: {{ mes }}</div>
</template>
<script>
import pubsub from 'pubsub.js';

export default {
    data() {
        return {
            name: 'dog',
            mes: '',
        };
    },
    methods: {
        recv(name) {
            this.mes = `I receive, your name is ${name}!`;
        },
    },
    mounted() {
        // this.$bus.$on("receive", this.recv);

        this.pubId = pubsub.subscribe('receive', this.recv);
    },
    // 在组件销毁之前解绑自定义事件，否则占用全局作用域
    beforeDestroy() {
        // this.$bus.$off("receive");

        pubsub.unsubscribe(this.pubId); // 使用id解绑
    },
};
</script>
