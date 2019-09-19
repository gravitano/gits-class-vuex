import {
  ADD_PRODUCT_TO_CART,
  DECREMENT_PRODUCT_INVENTORY,
  INCREMENT_ITEM_QUANTITY,
} from '../mutationTypes';

export default {
  namespaced: true,
  state: {
    items: [],
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
  },
};
