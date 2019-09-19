import {DECREMENT_PRODUCT_INVENTORY, SET_PRODUCTS} from '../mutationTypes';
import Product from '../../api/Product';

export default {
  namespaced: true,
  state: {
    products: [],
  },
  mutations: {
    [SET_PRODUCTS](state, products) {
      state.products = products;
    },
    [DECREMENT_PRODUCT_INVENTORY](state, id) {
      const product = state.products.find(item => item.id === id);
      if (product) {
        product.inventory--;
      }
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
};
