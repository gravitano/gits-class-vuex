import Vue from 'vue';
import Vuex from 'vuex';
import {products} from '../mock';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products,
  },
  mutations: {},
  actions: {},
});
