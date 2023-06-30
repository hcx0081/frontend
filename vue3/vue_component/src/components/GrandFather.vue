<template>
    <h1>I am GrandFather</h1>
  {{ name }}, {{ age }}
    <Father></Father>
</template>
<script>
import Father from './Father.vue';
import {provide, reactive, toRefs} from 'vue';

export default {
    components: {
        Father
    },
    setup() {
        const data = reactive({
            name: 'zs',
            age: 20
        });

        /* 向后代组件提供数据 */
        provide('name', data.name);
        provide('age', data.age);

        return {
            ...toRefs(data)
        };
    },

};
</script>
