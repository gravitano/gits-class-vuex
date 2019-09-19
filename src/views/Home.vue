<template>
  <div>
    <h1>Vuex Shopping Cart</h1>

    <product-list />

    <cart />
  </div>
</template>

<script>
import Cart from '../components/Cart';
import ProductList from '../components/ProductList';

export default {
  name: 'home',
  components: {ProductList, Cart},
};
</script>

<style scoped></style>
