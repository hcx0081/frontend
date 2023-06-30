<template>
    <div id="container">
        <Category title="LAN" :dataList="lanList">
            <!-- 填充插槽 -->
            <img src="./assets/logo.png"/>
        </Category>

        <Category title="FrameWork" :dataList="frameWorkList">
            <template v-slot:favicon>
                <img src="./assets/logo.png"/>
                <img src="./assets/logo.png"/>
            </template>
        </Category>

        <Game title="Game">
            <template v-slot="{ gameList }">
                {{ gameList }}
                <ul>
                    <li v-for="(data, index) in gameList" :key="index">{{ data }}</li>
                </ul>
            </template>
        </Game>
    </div>
</template>

<script>
import Category from './components/Category.vue';
import Game from './components/Game.vue';

export default {
    name: 'App',
    components: {
        Category,
        Game,
    },
    data() {
        return {
            lanList: ['Java', 'C', 'C++'],
            frameWorkList: ['Vue', 'React', 'Angular'],
        };
    },
};
</script>
<style scoped>
#container {
    display: flex;
    justify-content: space-around;
}
</style>
