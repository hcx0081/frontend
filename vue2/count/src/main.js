import Vue from 'vue';
import App from './App.vue';
// 导入模块
// import store from './store/index';
import store from './store';

Vue.config.productionTip = false;

const app = new Vue({
    render: h => h(App),

    // 传入store选项
    store,
}).$mount('#app');
