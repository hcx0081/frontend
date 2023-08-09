<template>
  <div class="father">
    <!-- 通过props传递函数 -->
    <!-- <Son :getSonScore="getSonScore"></Son> -->

    <!-- 自定义事件：myEvent -->
    <!-- 事件触发回调函数：getSonScore -->
    <!-- <Son @myEvent="getSonScore"></Son> -->

    <!-- <Son ref="Son"></Son> -->

    <!-- 自定义事件：myEvent -->
    <!-- 事件触发回调函数：getSonScore -->
    <Son @myEvent="getSonScore"></Son>
  </div>
</template>

<script>
import Son from './Son.vue';

export default {
  components: {
    Son,
  },
  methods: {
    // 事件触发回调函数
    getSonScore(data) {
      console.log('let me look look');
      console.log(data);
    },
  },
  mounted() {
    // $on绑定自定义事件
    // this.$refs.Son.$on('myEvent', this.getSonScore);
  },
};
</script>

<style scoped>
.father {
  width: 200px;
  height: 200px;
  background-color: aqua;
}
</style>
