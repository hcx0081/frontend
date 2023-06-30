<template>
    <h1>hello, {{ name }}</h1>
    <h1>hello, {{ girl.name }}</h1>
    <button @click="change">Change</button>
    <br>
    <br>
    <br>

    <FullName></FullName>
    <br>
    <br>

    <button @click="helloHook">helloHook</button>
    <br>
    <br>

    <CustomRef></CustomRef>
</template>

<script>
// 引入API
import {reactive, ref} from 'vue';
import FullName from './components/FullName.vue';
import CustomRef from './components/CustomRef.vue';

// 引入hook
import hook from './hook/hook';

export default {
    name: 'App',
    components: {
        FullName,
        CustomRef
    },
    setup(props, ctx) {
        let name = ref('zs');
        let girl = reactive({
            name: 'ls',
            age: 20
        });


        let data = reactive({
            name: 'zs',
            age: 20,
            girl: {
                name: 'ls',
                age: 20
            }
        });


        function change() {
            name.value = 'ww';

            girl.name = 'zl';
        }

        let helloHook = hook;

        return {
            name,
            girl,
            change,

            data,

            helloHook
        };
    },
};
</script>
