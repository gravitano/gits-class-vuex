import {
  ADD_PRODUCT_TO_CART,
  DECREMENT_PRODUCT_INVENTORY,
  INCREMENT_ITEM_QUANTITY,
  SET_CART_ITEMS,
  SET_CHECKOUT_STATUS,
} from '../mutationTypes';
import Shop from '../../api/Shop';

export default {
  namespaced: true,
  state: {
    items: [],
    checkoutStatus: null,
  },
  mutations: {
    [ADD_PRODUCT_TO_CART](state, id) {
      state.items.push({
        id,
        quantity: 1,
      });
    },
    [INCREMENT_ITEM_QUANTITY](state, id) {
      const cart = state.items.find(item => item.id === id);
      if (cart) {
        cart.quantity++;
      }
    },
    [SET_CHECKOUT_STATUS](state, status) {
      state.checkoutStatus = status;
    },
    [SET_CART_ITEMS](state, items) {
      state.items = items;
    },
  },
  actions: {
    addProductToCart({commit, state}, product) {
      const {id} = product;
      if (product.inventory > 0) {
        const cartItem = state.items.find(item => item.id === id);
        if (!cartItem) {
          commit(ADD_PRODUCT_TO_CART, id);
        } else {
          commit(INCREMENT_ITEM_QUANTITY, id);
        }
        commit(`products/${DECREMENT_PRODUCT_INVENTORY}`, id, {root: true});
      }
    },
    async checkout({commit}, products) {
      commit(SET_CHECKOUT_STATUS, null);
      const success = await Shop.checkout(products);
      if (success) {
        commit(SET_CART_ITEMS, []);
        commit(SET_CHECKOUT_STATUS, 'successful');
      } else {
        commit(SET_CHECKOUT_STATUS, 'failed');
      }
    },
  },
  getters: {
    cartProducts: (state, getters, rootState) => {
      return state.items.map(({id, quantity}) => {
        const product = rootState.products.products.find(
          product => product.id === id,
        );
        return {
          name: product.name,
          price: product.price,
          quantity,
        };
      });
    },
    cartTotalPrice: (state, getters) => {
      return getters.cartProducts.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
    },
  },
};
