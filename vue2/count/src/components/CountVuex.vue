<template>
    <div>
        <h3>当前求和为：{{ sum }}</h3>
        <h5>当前求和*10为：{{ bigSum }}</h5>
        <select v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <!-- <button @click="increment">+</button> -->
        <!-- <button @click="decrement">-</button> -->
        <!-- <button @click="incrementOdd">当前求和为奇数再加</button> -->
        <!-- <button @click="incrementWait">等一等再加</button> -->

        <!-- 需要自己传入参数，否则参数为事件对象 -->
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
// 需要导入
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex';

export default {
    data() {
        return {
            // 用户选择的数字
            n: 1,
        };
    },
    computed: {
        // sum() {
        //   return this.$store.state.sum;
        // },
        // bigSum() {
        //   return this.$store.getters.bigSum;
        // },

        /* 相当于如上 */
        // 自动映射生成计算属性
        // ...mapState({ sum: "sum" }),
        ...mapState(['sum']),

        // 自动映射生成计算属性
        // ...mapGetters(["bigSum"]),
        ...mapGetters({bigSum: 'bigSum'}),
    },
    methods: {
        // increment() {
        //   this.$store.dispatch("incre", this.n);
        // },
        // decrement() {
        //   this.$store.commit("DECRE", this.n); // 直接提交给mutation
        // },
        // incrementOdd() {
        //   this.$store.dispatch("increOdd", this.n);
        // },
        // incrementWait() {
        //   this.$store.dispatch("increWait", this.n);
        // },

        /* 相当于如上 */
        // 自动映射生成方法调用$store.dispatch()
        ...mapActions({
            increment: 'incre',
            incrementOdd: 'increOdd',
            incrementWait: 'increWait',
        }),
        // 自动映射生成方法调用$store.commit()
        ...mapMutations({decrement: 'DECRE'}),
    },
};
</script>

<style>
button,
select {
    margin-right: 5px;
}
</style>
