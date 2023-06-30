<template>
    <div>
        <button @click="isShow = !isShow">Click</button>
        <transition
                enter-active-class="animate__swing"
                leave-active-class="animate__rotateOut"
                appear
        >
            <h1 class="animate__animated" v-show="isShow" style="text-align: center">
                An animated element
            </h1>
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
