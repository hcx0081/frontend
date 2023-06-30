<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input
                    type="text"
                    placeholder="enter the name you search"
                    v-model="keyword"
                    @keyup.enter="getUserList"
            />&nbsp;<button @click="getUserList">Search</button>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            keyword: '',
        };
    },
    methods: {
        getUserList() {
            this.$bus.$emit('setUserList', {
                isFirst: false,
                isLoading: true,
                errMsg: '',
                userList: [],
            });
            axios({
                method: 'get',
                url: `https://api.github.com/search/users?q=${this.keyword}`,
            }).then(
                (response) => {
                    this.$bus.$emit('setUserList', {
                        isFirst: false,
                        isLoading: false,
                        errMsg: '',
                        userList: response.data.items,
                    });
                },
                (err) => {
                    this.$bus.$emit('setUserList', {
                        isFirst: false,
                        isLoading: false,
                        errMsg: err.info,
                        userList: [],
                    });
                }
            );
        },
    },
};
</script>

<style>
</style>
