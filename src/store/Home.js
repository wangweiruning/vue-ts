import { Commit } from 'vuex';
const state = {
  menulist: []
};

const mutations = {
  saveMenuList(states, params) {
    states.menulist = params;
    console.log(22222)
  },
};

const actions = {
  saveMenuListFN(context , params) {
    context.commit('saveMenuList', params);
    console.log(4444)

  },
};

export default {
    namespaced: true, // namespaced为false的时候，state,mutations,actions全局可以调用，为true，生成作用域，引用时要声明模块名称
    state,
    mutations,
    actions,
};