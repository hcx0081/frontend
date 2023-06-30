<template>
    <div class="game">
        <h3>{{ title }}</h3>
        <!-- 父组件向子组件插入结构时，子组件向父组件传递数据 -->
        <slot :gameList="gameList">This is a game slot</slot>
    </div>
</template>
<script>
export default {
    props: ['title'],
    data() {
        return {
            gameList: ['APEX', 'LOL', 'CF'],
        };
    },
};
</script>

<style scoped>
.game {
    background-color: #ffcc80;
    width: 300px;
    height: 450px;
}

.game h3 {
    text-align: center;
}

img {
    width: 100%;
}
</style>
