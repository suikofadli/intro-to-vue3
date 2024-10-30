app.component("product-atc", {
  props: {
    stock: {
      type: Number,
      required: true,
    },
  },

  template: `
    <div class="mt-10 flex">
        <button type="submit"
            class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full disabled:cursor-not-allowed disabled:bg-gray-500"
            :disabled="stock === 0"
            @click="$emit('add-to-cart')"
        >
            Add to cart
        </button>
    </div>
    `,
});
