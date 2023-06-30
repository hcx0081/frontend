<template>
    <h3>I am Son</h3>
  {{ name }}, {{ age }}
</template>
<script>
import {inject} from 'vue';

export default {
    setup() {
        /* 注入父代组件提供的数据 */
        let name = inject('name');
        let age = inject('age');

        return {
            name,
            age
        };
    }
};
</script>
