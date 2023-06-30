<template>
    <div id="root">
        姓：<input type="text" v-model="person.firstName">
        名：<input type="text" v-model="person.lastName">

        <div>{{ person.fullName }}</div>

        <button @click="person.job.salary++">Change</button>
        {{ person.job.salary }}
    </div>
</template>
<script>
import {reactive, watch} from 'vue';

export default {
    setup() {
        let person = reactive({
            firstName: '',
            lastName: '',

            fullName: '',
            job: {
                name: 'program',
                salary: 2000
            }
        });

        // person.fullName = computed(() => {
        //     return person.firstName + '-' + person.lastName;
        // });

        /* 监视一个数据源 */
        // watch(() => person.firstName, (newVal, oldVal) => {
        //     person.fullName = newVal + '-' + person.lastName;
        // });
        // watch(() => person.lastName, (newVal, oldVal) => {
        //     person.fullName = person.firstName + '-' + newVal;
        // });

        /* 监视多个数据源 */
        watch([() => person.firstName, () => person.lastName],
            ([firstNameNewVal, lastNameNewVal], [firstNameOldVal, lastNameOldVal]) => {
                person.fullName = firstNameNewVal + '-' + lastNameNewVal;
            });

        /* 监视整个对象，deep无效（强制自动开启） */
        watch(person, (newVal, oldVal) => {
            console.log(newVal);
            console.log(oldVal);
        });

        /* 监视对象的属性，deep有效 */
        watch(() => person.job, (newVal, oldVal) => {
            console.log(newVal);
            console.log(oldVal);
        }, {deep: true});

        return {
            person
        };
    }
};
</script>
