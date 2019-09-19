<template>
  <div class="counter-app">
    <h1>
      Counter
    </h1>
    <h2>{{ count }}</h2>
    <div class="action-buttons">
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
      <button @click="incrementAsync">Increment Async</button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex';

export default {
  name: 'Counter',
  computed: mapState(['count']),
  methods: {
    ...mapMutations(['increment', 'decrement']),
    ...mapActions(['incrementAsync']),
  },
};
</script>

<style scoped>
.counter-app {
  text-align: center;
}
.action-buttons {
  display: flex;
  justify-content: space-between;
  width: 20%;
  margin: 0 auto;
}
</style>
