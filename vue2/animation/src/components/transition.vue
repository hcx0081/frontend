<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition :appear="true">
            <div>
                <h1 v-show="isShow" style="margin-left: 20px">hello</h1>
                <h1 v-show="isShow" style="margin-left: 20px">world</h1>
            </div>
        </transition>
        <transition-group appear>
            <h1 v-show="isShow" style="margin-left: 20px" key="1">hello</h1>
            <h1 v-show="isShow" style="margin-left: 20px" key="2">world</h1>
        </transition-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: true,
        };
    },
};
</script>

<style scoped>
/* 进入的起点、离开的终点 */
.v-enter,
.v-leave-to {
    transform: translateX(-500px);
}

/* 进入的过程、离开的过程 */
.v-enter-active,
.v-leave-active {
    transition: 1s ease;
}

/* 进入的终点、离开的起点 */
.v-enter-to,
.v-leave {
    transform: translateX(0);
}
</style>
