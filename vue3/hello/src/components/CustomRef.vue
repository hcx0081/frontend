<template>
  keyWord: <input type="text" v-model="keyWord">
    <h3>{{ keyWord }}</h3>
</template>
<script>
import {customRef} from 'vue';

export default {
    setup() {
        // let keyWord = ref('');

        function myRef(value, delay) {
            let timer;
            return customRef((track, trigger) => {
                return {
                    get() {
                        track();
                        console.log('读');
                        return value;
                    },
                    set(newVal) {
                        clearTimeout(timer);
                        timer = setTimeout(() => {
                            console.log('写');
                            console.log(newVal);
                            value = newVal;
                            trigger();
                        }, delay);
                    }
                };
            });
        }

        let keyWord = myRef('1', 1000);

        console.log(keyWord);

        return {
            keyWord
        };
    }
};
</script>
