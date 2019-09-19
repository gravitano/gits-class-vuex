import Vue from 'vue';
import Vuex from 'vuex';
import {SET_PRODUCTS} from './mutationTypes';
import Product from '../api/Product';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    [SET_PRODUCTS](state, products) {
      state.products = products;
    },
  },
  actions: {
    async getProducts({commit}) {
      const products = await Product.all();
      commit(SET_PRODUCTS, products);
    },
  },
  getters: {
    products: state => state.products,
  },
});
