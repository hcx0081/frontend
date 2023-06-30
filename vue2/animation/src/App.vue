<template>
    <div id="app">
        <Animation></Animation>
        <Transition></Transition>
        <Animat></Animat>
    </div>
</template>

<script>
import Animation from './components/animation.vue';
import Transition from './components/transition.vue';

import Animat from './components/animate.vue';

export default {
    name: 'App',
    components: {
        Animation,
        Transition,
        Animat,
    },
};
</script>

