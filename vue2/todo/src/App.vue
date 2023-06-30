<template>
  <!--
      App
        MyHeader
        MyList
          MyItem
        MyFooter
  -->
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader @addTodo="addTodo"></MyHeader>
                <MyList :todoList="todoList" :deleteTodo="deleteTodo"></MyList>
                <MyFooter
                        :todoList="todoList"
                        :deleteComTodo="deleteComTodo"
                ></MyFooter>
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';
import MyList from './components/MyList.vue';

export default {
    name: 'App',
    components: {
        MyHeader,
        MyFooter,
        MyList,
    },
    data() {
        return {
            todoList: JSON.parse(localStorage.getItem('todoList')) || [], // 防止报错
        };
    },
    methods: {
        addTodo(todoObj) {
            this.todoList.unshift(todoObj);
        },
        deleteTodo(id) {
            this.todoList = this.todoList.filter((e) => {
                return e.id !== id;
            });
        },
        deleteComTodo() {
            this.todoList = this.todoList.filter((e) => {
                return e.isDo != true;
            });
        },
    },
    watch: {
        todoList: {
            deep: true, // 开启深度监视，可以监视到数组中的每个对象中的变化
            handler: function (newVal) {
                localStorage.setItem('todoList', JSON.stringify(newVal));
            },
        },
    },
    mounted() {
        this.$bus.$on('deleteTodo', this.deleteTodo);
    },
};
</script>
<style>
/*base*/
body {
    background: #fff;
}

.btn {
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn-edit {
    color: #fff;
    background-color: #3b8ad4;
    border: 1px solid #1f83e6;
    margin-right: 5px;
}

.btn:focus {
    outline: none;
}

.todo-container {
    width: 600px;
    margin: 0 auto;
}

.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>
