import {products} from '../mock';

export default {
  all() {
    // return axios.get('v1/products');
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  },
};
