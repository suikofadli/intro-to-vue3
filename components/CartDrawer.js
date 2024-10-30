app.component("cart-drawer", {
  props: {
    open: { type: Boolean, required: true },
    cart: { type: Array, required: true },
  },

  template: `
  <div v-show="open" class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
  <!-- Background backdrop, show/hide based on slide-over state. -->
  <div class="fixed bg-black/25 inset-0"></div>

  <div class="fixed inset-0 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div class="pointer-events-auto w-screen max-w-md">
          <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
            <div class="px-4 sm:px-6">
              <div class="flex items-start justify-between">
                <h2 class="text-base font-semibold text-gray-900" id="slide-over-title">Shopping Cart</h2>
                <div class="ml-3 flex h-7 items-center">
                  <button @click="$emit('close')" type="button"
                    class="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span class="absolute -inset-2.5"></span>
                    <span class="sr-only">Close panel</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                      aria-hidden="true" data-slot="icon">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="relative mt-6 flex-1 px-4 sm:px-6">
              <div class="flow-root">
                <ul role="list" class="-my-6 divide-y divide-gray-200">
                  <li class="flex py-6" v-for="item in cart">
                    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img :src="item.image"
                        :alt="item.name"
                        class="h-full w-full object-cover object-center">
                    </div>

                    <div class="ml-4 flex flex-1 flex-col">
                      <div>
                        <div class="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href="#">{{ item.name }}</a>
                          </h3>
                          <p class="ml-4">{{ item.price }}</p>
                        </div>
                        <p class="mt-1 text-sm text-gray-500">Salmon</p>
                      </div>
                      <div class="flex flex-1 items-end justify-between text-sm">
                        <p class="text-gray-500">Qty 1</p>

                        <div class="flex">
                          <button type="button"
                            class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="flex py-6">
                    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img src="https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
                        alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                        class="h-full w-full object-cover object-center">
                    </div>

                    <div class="ml-4 flex flex-1 flex-col">
                      <div>
                        <div class="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href="#">Medium Stuff Satchel</a>
                          </h3>
                          <p class="ml-4">$32.00</p>
                        </div>
                        <p class="mt-1 text-sm text-gray-500">Blue</p>
                      </div>
                      <div class="flex flex-1 items-end justify-between text-sm">
                        <p class="text-gray-500">Qty 1</p>

                        <div class="flex">
                          <button type="button"
                            class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="flex py-6">
                    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img src="https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-03.jpg"
                        alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
                        class="h-full w-full object-cover object-center">
                    </div>

                    <div class="ml-4 flex flex-1 flex-col">
                      <div>
                        <div class="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href="#">Zip Tote Basket</a>
                          </h3>
                          <p class="ml-4">$140.00</p>
                        </div>
                        <p class="mt-1 text-sm text-gray-500">White and black</p>
                      </div>
                      <div class="flex flex-1 items-end justify-between text-sm">
                        <p class="text-gray-500">Qty 1</p>

                        <div class="flex">
                          <button type="button"
                            class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                        </div>
                      </div>
                    </div>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
   `,
});
