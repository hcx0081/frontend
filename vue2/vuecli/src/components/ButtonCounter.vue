<template>
    <div>
        <button v-on:click="count++">Click</button>
        <span>You clicked me {{ count }} times.</span>
    </div>
</template>
<script>
// export default Vue.extend({
//   data() {
//     return {
//       count: 0,
//     };
//   },
// });

/*  可以省略Vue.extend() */
export default {
    data: function () {
        return {
            count: 0,
        };
    },
};
</script>
