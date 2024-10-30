app.component("product-info", {
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: String,
  },

  template: `
  <div>
    <h1 class="text-3xl font-bold tracking-tight text-gray-900">{{ name }}</h1>

    <div class="mt-3">
        <h2 class="sr-only">Price</h2>
        <p class="text-3xl tracking-tight text-gray-900">{{ price }}</p>
    </div>

    <div class="mt-6">
        <h3 class="sr-only">Description</h3>

        <div class="space-y-6 text-base text-gray-700">
            <p>{{ description }}</p>
        </div>
    </div>
  </div>
  `,
});
