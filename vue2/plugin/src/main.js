import Vue from 'vue';
import App from './App.vue';
// 引入插件
import plugin from './plugins';

Vue.config.productionTip = false;

Vue.use(plugin, 'hello');

new Vue({
    render: h => h(App),
}).$mount('#app');
