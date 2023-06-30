<template>
    <div id="app">
        <CountVue></CountVue>
        <CountVuex></CountVuex>
    </div>
</template>

<script>
import CountVue from './components/CountVue.vue';
import CountVuex from './components/CountVuex.vue';

export default {
    name: 'App',
    components: {
        CountVue,
        CountVuex,
    },
};
</script>
