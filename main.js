const app = Vue.createApp({
  data() {
    return {
      selectedVariant: 0,
      premiumMember: true,
      cart: [],
      openCart: false,
    };
  },

  methods: {
    addToCart(productId) {
      this.cart.push(productId);
    },
  },
});
