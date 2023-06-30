<template>
    <div>
        <ul>
            <li v-for="mes in mesList" :key="mes.id">
                <!-- 字符串写法 -->
                <!-- <router-link :to="`/home/message/mesDetail/${mes.id}/${mes.title}`">{{mes.title}}</router-link> -->

                <!-- 对象写法，不可以使用path，只可以使用name -->
                <router-link
                        :to="{
            name: 'mesDetail',
            params: {
              id: mes.id,
              title: mes.title,
            },
          }"
                >{{ mes.title }}
                </router-link>

                <input type="text"/>
            </li>
        </ul>
        <hr/>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Message', // 组件名称
    data() {
        return {
            mesList: [
                {id: '001', title: 'Mes001'},
                {id: '002', title: 'Mes002'},
            ],
        };
    },
};
</script>
