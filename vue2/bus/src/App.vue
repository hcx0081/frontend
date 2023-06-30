<template>
    <div id="app">
        <Cat></Cat>
        <Dog></Dog>
    </div>
</template>

<script>
import Cat from './components/Cat.vue';
import Dog from './components/Dog.vue';

export default {
    name: 'App',
    components: {
        Cat,
        Dog,
    },
};
</script>
