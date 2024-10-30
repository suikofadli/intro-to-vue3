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
    addToCart(productVariant, productName) {
      this.cart.push({ ...productVariant, name: productName });
    },

    removeCartItem(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId);
    },
  },
});
