<template>
    <div class="todo-footer" v-show="todoList.length">
        <label>
            <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
      <span>已完成{{ num }}</span> / 全部{{ todoList.length }}
    </span>
        <button class="btn btn-danger" @click="deleteComTodo">
            清除已完成任务
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {
        num() {
            return this.todoList.reduce((pv, cv) => {
                return pv + (cv.isDo == true ? 1 : 0);
            }, 0);
        },
        isAll: {
            get() {
                return this.num === this.todoList.length && this.todoList.length > 0;
            },
            set(v) {
                if (v) {
                    this.todoList.forEach((element) => {
                        element.isDo = true;
                    });
                } else {
                    this.todoList.forEach((element) => {
                        element.isDo = false;
                    });
                }
            },
        },
    },
    props: ['todoList', 'deleteComTodo'],
};
</script>

<style scope>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>
