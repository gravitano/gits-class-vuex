import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/products';
import cart from './modules/cart';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    cart,
  },
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  actions: {
    increment({commit}) {
      commit('increment');
    },
    decrement({commit}) {
      commit('decrement');
    },
    incrementAsync({commit}) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
  },
  getters: {
    count: state => state.count,
  },
});
