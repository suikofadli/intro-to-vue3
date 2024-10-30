app.component("product-badges", {
  props: {
    stock: {
      type: Number,
      required: true,
    },
    premiumMember: Boolean,
  },
  template: `
<div class="mt-6">
<div class="flex items-center">
    <svg v-if="stock > 0" class="h-5 w-5 flex-shrink-0 text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
        data-slot="icon">
        <path fill-rule="evenodd"
            d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
            clip-rule="evenodd" />
    </svg>

    <svg v-if="stock === 0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 flex-shrink-0 text-red-500">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>


    <p v-if="stock > 10" class="ml-2 text-sm text-gray-500">In stock</p>
    <p v-else-if="stock <= 10 && stock > 0"
        class="ml-2 text-sm text-gray-500">Limited Stock</p>
    <p v-else class="ml-2 text-sm text-gray-500">Out of stock</p>
</div>

  <div class="mt-6 flex items-center" v-if="premiumMember">
      <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
              d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>


      <p class="ml-2 text-sm text-gray-500">Free Shipping</p>
  </div>
</div>
`,
});
