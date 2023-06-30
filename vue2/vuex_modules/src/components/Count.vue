<template>
    <div>
        <h3>当前求和为：{{ sum }}</h3>
        <!-- 需要自己传入参数，否则参数为事件对象 -->
        <button @click="increment(1)">+</button>
        <button @click="decrement(1)">-</button>
        <h5>下方的总人数为：{{ personList.length }}</h5>
    </div>
</template>

<script>
// 需要导入
import {mapActions, mapMutations, mapState} from 'vuex';

export default {
    computed: {
        ...mapState('countModule', ['sum']),
        ...mapState('personModule', ['personList']),
    },
    methods: {
        ...mapActions({increment: 'incre'}),
        ...mapMutations('countModule', {decrement: 'DECRE'}),
    },
};
</script>

<style>
button,
select {
    margin-right: 0.0667rem;
}
</style>
