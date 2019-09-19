export default {
  checkout() {
    // return axios.post('v1/checkout');
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  },
};
