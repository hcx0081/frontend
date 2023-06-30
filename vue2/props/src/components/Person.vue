<template>
    <div>
        {{ name }}, {{ age + 1 }}
        {{ hobby }}
    </div>
</template>

<script>
export default {
    // 数组形式
    // props: ["name", "age", "hobby"],

    // 检测类型形式
    // props: {
    //   name: String,
    //   age: Number,
    //   hobby: Array,
    // },

    // 完整形式
    props: {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            validator: function (value) {
                // 必须匹配以下之一
                return [1, 2, 3].includes(value);
            },
        },
        hobby: {
            default() {
                return [1, 2, 3];
            },
        },
    },
};
</script>
