<template>
    <div>
        <h5>上方的求和为：{{ sum }}</h5>
        <h3>人员列表</h3>
        <h4>第一个人是：{{ firstPerson }}</h4>
        <input type="text" v-model="name"/>
        <button @click="add">Add</button>
        <ul>
            <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
        </ul>
    </div>
</template>

<script>
import {nanoid} from 'nanoid';

export default {
    data() {
        return {
            name: '',
        };
    },
    computed: {
        sum() {
            return this.$store.state.countModule.sum;
        },
        personList() {
            return this.$store.state.personModule.personList;
        },

        firstPerson() {
            return this.$store.getters['personModule/firstPerson'];
        },
    },
    methods: {
        add() {
            const personObj = {id: nanoid(), name: this.name};
            this.$store.commit('personModule/ADD', personObj);
            this.name = '';
        },
    },
};
</script>
