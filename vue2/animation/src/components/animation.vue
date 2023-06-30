<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition appear>
            <h1 v-show="isShow" style="margin-left: 20px">hello</h1>
        </transition>
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
@keyframes move {
    0% {
        transform: translateX(-500px);
    }
    100% {
        transform: translateX(0);
    }
}

.v-enter-active {
    animation: move 1s ease;
}

.v-leave-active {
    animation: move 1s ease reverse;
}
</style>
