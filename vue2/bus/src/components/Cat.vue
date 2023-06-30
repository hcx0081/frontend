<template>
    <div>
        {{ name }}:
        <button @click="sendToDog">Send</button>
    </div>
</template>
<script>
import pubsub from 'pubsub.js';

export default {
    data() {
        return {
            name: 'cat',
        };
    },
    methods: {
        sendToDog() {
            // this.$bus.$emit("receive", this.name);

            pubsub.publish('receive', [this.name]);
        },
    },
};
</script>
