<template>
    <div>
        <h3>当前求和为：{{ sum }}</h3>
        <select v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            n: 1,
            sum: 0,
        };
    },
    methods: {
        increment() {
            this.sum += this.n;
        },
        decrement() {
            this.sum -= this.n;
        },
        incrementOdd() {
            if (this.sum % 2) {
                this.sum += this.n;
            }
        },
        incrementWait() {
            setTimeout(() => {
                this.sum += this.n;
            }, 1000);
        },
    },
};
</script>

<style>
button,
select {
    margin-right: 5px;
}
</style>
