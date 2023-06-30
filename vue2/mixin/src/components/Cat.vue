<template>
    <div>
        {{ name }}:
        <button @click="say">say</button>
        {{ mes }}
    </div>
</template>
<script>
// 导入混入配置
import {myMixin1, myMixin2} from '../myMixin';

export default {
    data() {
        return {
            name: 'cat',
        };
    },
    mixins: [myMixin1, myMixin2],
};
</script>
