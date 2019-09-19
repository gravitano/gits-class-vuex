import Vue from 'vue';
import Vuex from 'vuex';
import {
  ADD_PRODUCT_TO_CART,
  DECREMENT_PRODUCT_INVENTORY,
  INCREMENT_ITEM_QUANTITY,
  SET_PRODUCTS,
} from './mutationTypes';
import Product from '../api/Product';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cartItems: [],
  },
  mutations: {
    [SET_PRODUCTS](state, products) {
      state.products = products;
    },
    [ADD_PRODUCT_TO_CART](state, id) {
      state.cartItems.push({
        id,
        quantity: 1,
      });
    },
    [DECREMENT_PRODUCT_INVENTORY](state, id) {
      const product = state.products.find(item => item.id === id);
      if (product) {
        product.inventory--;
      }
    },
    [INCREMENT_ITEM_QUANTITY](state, id) {
      const cart = state.cartItems.find(item => item.id === id);
      if (cart) {
        cart.quantity++;
      }
    },
  },
  actions: {
    async getProducts({commit}) {
      const products = await Product.all();
      commit(SET_PRODUCTS, products);
    },
    addProductToCart({commit, state}, product) {
      const {id} = product;
      if (product.inventory > 0) {
        const cartItem = state.cartItems.find(item => item.id === id);
        if (!cartItem) {
          commit(ADD_PRODUCT_TO_CART, id);
        } else {
          commit(INCREMENT_ITEM_QUANTITY, id);
        }
        commit(DECREMENT_PRODUCT_INVENTORY, id);
      }
    },
  },
  getters: {
    products: state => state.products,
  },
});
