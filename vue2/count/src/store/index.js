/* 该文件用于创建store */

import Vue from 'vue';
// 导入vuex
import Vuex from 'vuex';
// 注册插件
Vue.use(Vuex);

// 创建并导出store
export default new Vuex.Store({
    // 响应组件行为
    actions: {
        incre(context, val) {
            console.log(context);
            context.commit('INCRE', val);
        },
        increOdd(context, val) {
            if (context.state.sum % 2) {
                context.commit('INCRE', val);
            }
        },
        increWait(context, val) {
            setTimeout(() => {
                context.commit('INCRE', val);
            }, 1000);
        },
    },
    // 操作数据
    mutations: {
        INCRE(state, val) {
            state.sum += val;
        },
        DECRE(state, val) {
            state.sum -= val;
        },
    },
    // 存储数据
    state: {
        sum: 0,
    },


    // 状态计算属性
    getters: {
        bigSum(state, a, b, c, d) {
            return state.sum * 10;
        }
    },
});
