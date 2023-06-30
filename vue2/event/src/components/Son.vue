<template>
    <div class="son">
        <button @click="sendExam">Send</button>

        <button @click="off">off</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            score: {
                chinese: 100,
                english: 100,
                math: 100,
            },
        };
    },
    // props: ["getSonScore"],
    methods: {
        sendExam() {
            // 触发父组件的函数
            // this.getSonScore(this.score);

            /* 触发事件 */
            this.$emit('myEvent', this.score);
        },
    },
};
</script>

<style scoped>
.son {
    width: 100px;
    height: 100px;
    background-color: pink;
}
</style>
