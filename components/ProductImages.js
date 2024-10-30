app.component("product-images", {
  props: {
    initialThumbnail: {
      type: String,
      required: true,
    },
    galleries: Array,
  },

  data() {
    return {
      selectedImage: this.initialThumbnail,
    };
  },

  methods: {
    updateSelectedImage(imageUrl) {
      this.selectedImage = imageUrl;
    },
  },

  watch: {
    initialThumbnail(newValue) {
      this.selectedImage = newValue;
    },
  },

  template: `
     <div class="flex flex-col-reverse col-span-3">
        <!-- Image selector -->
        <div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
            <div class="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
                <button 
                    v-for="image in galleries" 
                    id="tabs-1-tab-1"
                    @click="updateSelectedImage(image)"
                    class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                    aria-controls="tabs-1-panel-1" role="tab" type="button">
                    <span class="sr-only">Angled view</span>
                    <span class="absolute inset-0 overflow-hidden rounded-md">
                        <img :src="image" alt=""
                            class="h-full w-full object-cover object-center">
                    </span>
                    <!-- Selected: "ring-indigo-500", Not Selected: "ring-transparent" -->
                    <span
                        class="pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                        :class="[selectedImage === image ? 'ring-indigo-500' : 'ring-transparent']"
                        aria-hidden="true"></span>
                </button>
            </div>
        </div>

        <div class="aspect-h-1 aspect-w-1 w-full">
            <!-- Tab panel, show/hide based on tab state. -->
            <div id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
                <img :src="selectedImage"
                    alt="Angled front view with bag zipped and handles upright."
                    class="h-full w-full object-cover object-center sm:rounded-lg border rounded-xl">
            </div>

            <!-- More images... -->
        </div>
    </div>
    `,
});
