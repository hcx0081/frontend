<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="(data, index) in dataList" :key="index">{{ data }}</li>
    </ul>

    <!-- 默认插槽 -->
    <!-- <slot>This is a slot</slot> -->

    <!-- 具名插槽 -->
    <!-- <slot name="favicon">This is a slot</slot> -->
  </div>
</template>
<script>
export default {
  name: 'Category',
  created() {
    console.log(this.$slots);
  },
  props: ['title', 'dataList'],
};
</script>

<style>
.category {
  background-color: whitesmoke;
  width: 300px;
  height: 450px;
}

.category h3 {
  text-align: center;
}

img {
  width: 100%;
}
</style>
