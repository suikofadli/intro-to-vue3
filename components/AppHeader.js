app.component("app-header", {
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },

  template: `
  <header class="relative">
        <nav aria-label="Top">
            <!-- Secondary navigation -->
            <div class="bg-white">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="border-b border-gray-200">
                        <div class="flex h-16 items-center justify-between">
                            <!-- Logo (lg+) -->
                            <div class="hidden lg:flex lg:items-center">
                                <a href="#">
                                    <span class="sr-only">Your Company</span>
                                    <img class="h-8 w-auto"
                                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                        alt="">
                                </a>
                            </div>

                            <div class="hidden h-full lg:flex">
                                <!-- Mega menus -->
                                <div class="ml-8">
                                    <div class="flex h-full justify-center space-x-8">
                                        <a href="#"
                                            class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Mac</a>
                                        <a href="#"
                                            class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">iPhone</a>
                                        <a href="#"
                                            class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">iPad</a>
                                        <a href="#"
                                            class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Watch</a>
                                        <a href="#"
                                            class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Music</a>
                                        <a href="#"
                                            class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Accessories</a>
                                    </div>
                                </div>
                            </div>

                            <!-- Mobile menu and search (lg-) -->
                            <div class="flex flex-1 items-center lg:hidden">
                                <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
                                <button type="button" class="-ml-2 rounded-md bg-white p-2 text-gray-400">
                                    <span class="sr-only">Open menu</span>
                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" aria-hidden="true" data-slot="icon">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </button>

                                <!-- Search -->
                                <a href="#" class="ml-2 p-2 text-gray-400 hover:text-gray-500">
                                    <span class="sr-only">Search</span>
                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" aria-hidden="true" data-slot="icon">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </a>
                            </div>

                            <!-- Logo (lg-) -->
                            <a href="#" class="lg:hidden">
                                <span class="sr-only">Your Company</span>
                                <img src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                    alt="" class="h-8 w-auto">
                            </a>

                            <div class="flex flex-1 items-center justify-end">
                                <div class="flex items-center lg:ml-8">
                                    <div class="flex space-x-8">
                                        <div class="hidden lg:flex">
                                            <a href="#" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                                                <span class="sr-only">Search</span>
                                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                                    data-slot="icon">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                                </svg>
                                            </a>
                                        </div>

                                        <div class="flex">
                                            <a href="#" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                                                <span class="sr-only">Account</span>
                                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                                    data-slot="icon">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                    <span class="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true"></span>

                                    <div class="flow-root">
                                        <button @click="$emit('openCart')" class="group -m-2 flex items-center p-2">
                                            <svg class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                                fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                stroke="currentColor" aria-hidden="true" data-slot="icon">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg>
                                            <span
                                                class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                                               {{ cart.length }} 
                                                </span>
                                            <span class="sr-only">items in cart, view bag</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    `,
});
