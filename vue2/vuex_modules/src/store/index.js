import Vue from 'vue';
import Vuex from 'vuex';
import countModule from './countModule';
import personModule from './personModule';

Vue.use(Vuex);

export default new Vuex.Store({
    // 创建模块
    modules: {
        countModule,
        personModule
    }
});
