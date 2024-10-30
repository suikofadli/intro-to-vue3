const template = `
<div>
  <h3 class="text-sm font-medium text-gray-600">
      Color: {{ selectedVariant.colorName }}
  </h3>

  <div aria-label="Choose a color" class="mt-4">
      <div class="flex items-center space-x-3">
          <!-- Active and Checked: "ring ring-offset-1" -->
          <template v-for="(variant, index) in variants" :key="variant.id">
              <label
                  class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-700 focus:outline-none"
                  :class="{ 'ring ring-offset-1': variant.id === selectedVariant.id}"
                  v-on:mouseover="updateSelectedVariant(index)" :aria-label="variant.colorName">
                  <span aria-hidden="true" class="h-8 w-8 rounded-full border border-black border-opacity-10"
                      :style="{ backgroundColor: variant.color }"></span>
              </label>
          </template>
      </div>
  </div>
</div>
`;

app.component("product-variants", {
  props: {
    variants: {
      type: Array,
      required: true,
    },
    selectedVariant: {
      type: Object,
      required: true,
    },
  },
  template,
  methods: {
    updateSelectedVariant(index) {
      this.$emit("update-selected-variant", index);
    },
  },
});
