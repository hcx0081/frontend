/* 项目入口文件 */
// 引入Vue
import Vue from 'vue';
// 引入App组件，它是所有组件的父组件
import App from './App.vue';
// 关闭生产提示
Vue.config.productionTip = false;
// 创建vm，并挂载到指定元素上
let app = new Vue({
    render: h => h(App),
}).$mount('#app');
console.log(app);
