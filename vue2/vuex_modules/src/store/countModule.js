// 导出对象
export default {
    // 开启命名空间
    namespaced: true,
    // 响应组件行为
    actions: {
        incre(context, val) {
            context.commit('INCRE', val);
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
    getters: {
        s() {
            return 1;
        }
    },
    // 存储数据
    state: {
        sum: 0,
    },
};
