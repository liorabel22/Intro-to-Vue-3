const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeFromCart(id) {
      itemIndex = this.cart.findIndex((item) => item === id);
      if (itemIndex !== -1) {
        this.cart.splice(itemIndex, 1);
      }
    },
  },
});
