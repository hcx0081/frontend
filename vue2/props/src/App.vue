<template>
    <div id="app">
        <Person name="zs" :age="20" :hobby="['吃饭', '睡觉', '打豆豆']"></Person>
    </div>
</template>

<script>
import Person from './components/Person.vue';

export default {
    name: 'App',
    components: {
        Person,
    },
};
</script>
