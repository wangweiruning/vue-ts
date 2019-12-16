import Vue from 'vue';
import Vuex from 'vuex';
import HomeVUEX from './Home';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    HomeVUEX,
  },
});