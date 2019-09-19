<template>
  <div>
    <h2>Products</h2>
    <div class="product-list">
      <div class="product-item" :key="product.id" v-for="product in products">
        <h4>{{ product.name }}</h4>
        <p>{{ product.price | toDollar }}</p>
        <button
          :disabled="!product.inventory"
          @click="addProductToCart(product)"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
  name: 'ProductList',
  computed: {
    ...mapState('products', ['products']),
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    ...mapActions('products', ['getProducts']),
    ...mapActions('cart', ['addProductToCart']),
  },
};
</script>

<style scoped>
.product-list {
  display: flex;
}
.product-item {
  flex: 1;
}
</style>
