<template>
  <div class="cart-box">
    <h2>Your Cart</h2>
    <p v-if="!products.length">
      <i>Please add some products to cart.</i>
    </p>
    <template v-if="products.length">
      <div class="cart-item" v-for="cart in products" :key="cart.id">
        {{ cart.name }} - {{ cart.price | toDollar }} x {{ cart.quantity }}
      </div>
    </template>
    <p>Total: {{ total | toDollar }}</p>
    <p>
      <button :disabled="!products.length" @click="checkout(products)">
        Checkout
      </button>
    </p>
    <p v-if="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex';

export default {
  name: 'Cart',
  computed: {
    ...mapState('cart', ['checkoutStatus']),
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice',
    }),
  },
  methods: {
    ...mapActions('cart', ['checkout']),
  },
};
</script>

<style scoped></style>
