<template>
    <div id="app">
        <!-- ref相当于id -->
        <Hello ref="hello"></Hello>
        <button @click="showMes" ref="btn">Click</button>
    </div>
</template>

<script>
import Hello from './components/Hello';

export default {
    name: 'App',
    components: {
        Hello,
    },
    methods: {
        showMes() {
            console.log(this.$refs.hello); // 输出vc
            console.log(this.$refs.btn); // 输出DOM元素
            console.log(this.$refs);
        },
    },
};
</script>
