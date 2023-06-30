import Vue from 'vue';
import App from './App.vue';
// 导入vue-router
import VueRouter from 'vue-router';
// 导入路由器
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
    render: h => h(App),

    // 传入router选项
    router
}).$mount('#app');
