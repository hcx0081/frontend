// 导出对象
export default {
    // 开启命名空间
    namespaced: true,
    // 操作数据
    mutations: {
        ADD(state, val) {
            state.personList.unshift(val);
        },
    },
    // 存储数据
    state: {
        personList: [{id: '001', name: 'zs'}]
    },
    // 状态计算属性
    getters: {
        firstPerson(state) {
            return state.personList[0].name;
        }
    },
};
