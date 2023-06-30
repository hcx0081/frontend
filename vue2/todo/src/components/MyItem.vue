<template>
    <transition appear>
        <li>
            <label>
                <input type="checkbox" v-model="item.isDo"/>
                <span v-show="!item.isEdit">{{ item.name }}</span>
                <input
                        type="text"
                        v-model="item.name"
                        v-show="item.isEdit"
                        @blur="handleBlur"
                        @keyup.enter="handleBlur"
                        ref="ipt"
                />
            </label>
            <button class="btn btn-danger" @click="deleteTodo(item.id)">删除</button>
            <button class="btn btn-edit" @click="handleEdit(item)" v-show="!item.isEdit">编辑</button>
            <!-- 不给完成按钮绑定事件，而是借助input框的失去焦点事件 -->
            <button class="btn btn-edit" v-show="item.isEdit">完成</button>
        </li>
    </transition>
</template>

<script>
export default {
    props: ['item'],
    methods: {
        deleteTodo(id) {
            if (confirm('是否删除？')) {
                this.$bus.$emit('deleteTodo', id);
            }
        },
        handleEdit(item) {
            item.isEdit ? (this.item.isEdit = false) : (this.item.isEdit = true);
            if (this.item.isEdit == true) {
                this.$nextTick(function () {
                    this.$refs.ipt.focus();
                });
            }
        },
        handleBlur() {
            if (this.item.name.trim() == '') {
                alert('不能为空');
            } else {
                this.item.isEdit = false;
            }
        },
    },
};
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover {
    background-color: #ddd;
}

li:hover button {
    display: block;
}

@keyframes appearance {
    0% {
        opacity: 0;
        transform: translateX(100px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.v-enter-active {
    animation: appearance 0.5s ease;
}

.v-leave-active {
    animation: appearance 0.3s ease reverse;
}
</style>
