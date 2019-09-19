import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.filter('toDollar', function(value) {
  return new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
