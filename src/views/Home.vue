<template>
  <div class="product-list">
    <div class="product-item" :key="product.id" v-for="product in products">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price | toDollar }}</p>
      <button>Add to cart</button>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'home',
  computed: {
    ...mapState(['products']),
  },
  mounted() {
    this.$store.dispatch('getProducts');
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
