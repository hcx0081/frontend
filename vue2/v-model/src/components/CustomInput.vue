<template>
  <div>
    <input :value="msg" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: ['msg']
};
</script>

<style scoped>

</style>
