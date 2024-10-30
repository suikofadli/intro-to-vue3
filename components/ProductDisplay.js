app.component("product-display", {
  props: {
    premiumMember: Boolean,
  },

  data() {
    return {
      selectedVariantIndex: 0,

      product: {
        id: 123841,
        name: "iPhone 13",
        brand: "Apple",
        description:
          "iPhone 13. Sistem kamera ganda paling canggih yang pernah ada di iPhone. Chip A15 Bionic yang secepat kilat. Lompatan besar dalam kekuatan baterai. Desain kokoh. Dan layar Super Retina XDR yang lebih cerah.",
        variants: [
          {
            id: 1,
            color: "#fbf7f4",
            colorName: "Starlight",
            price: "Rp 10.249.000",
            specialPrice: null,
            stock: 20,
            image:
              "https://www.digimap.co.id/cdn/shop/files/iPhone_13_Starlight_PDP_Image_Position-1A__GBEN_32d66fbc-560a-4c84-8a65-f5a3e9896a2c.jpg?v=1717739307&width=823",
            galleries: [
              "https://www.digimap.co.id/cdn/shop/files/iPhone_13_Starlight_PDP_Image_Position-1A__GBEN_32d66fbc-560a-4c84-8a65-f5a3e9896a2c.jpg?v=1717739307&width=823",
              "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-13-mini/iphone-13-mini-starlight-back.jpg",
              "https://cdn.cs.1worldsync.com/41/0c/410c597f-a5c4-4c04-9d3b-13b8ca92b60a.jpg",
            ],
          },
          {
            id: 2,
            color: "#43484e",
            colorName: "Midnight",
            price: "Rp 10.249.000",
            specialPrice: null,
            stock: 3,
            image:
              "https://www.digimap.co.id/cdn/shop/files/iPhone_13_Midnight_PDP_Image_Position-1A__GBEN_140f1a45-62e1-4f91-9eba-da9510bb6c7b.jpg?v=1717739228&width=823",
            galleries: [
              "https://www.digimap.co.id/cdn/shop/files/iPhone_13_Midnight_PDP_Image_Position-1A__GBEN_140f1a45-62e1-4f91-9eba-da9510bb6c7b.jpg?v=1717739228&width=823",
            ],
          },
          {
            id: 3,
            color: "#3e503d",
            colorName: "Green",
            price: "Rp 10.249.000",
            specialPrice: "Rp 9.999.000",
            stock: 1,
            image:
              "https://www.digimap.co.id/cdn/shop/files/iPhone_13_Green_PDP_Image_Position-1A__GBEN_2d268861-17f8-4840-b06d-3619f17339d0.jpg?v=1717739965&width=823",
            galleries: [
              "https://www.digimap.co.id/cdn/shop/files/iPhone_13_Green_PDP_Image_Position-1A__GBEN_2d268861-17f8-4840-b06d-3619f17339d0.jpg?v=1717739965&width=823",
            ],
          },
          {
            id: 4,
            color: "#f02a36",
            colorName: "Red",
            price: "Rp 10.249.000",
            specialPrice: null,
            stock: 0,
            image:
              "https://www.digimap.co.id/cdn/shop/files/iPhone_13_ProductRED_PDP_Image_Position-1A__GBEN_ed6a7e9a-a72d-4976-a3e9-b32defeb75a8.jpg?v=1717739370&width=823",
            galleries: [
              "https://www.digimap.co.id/cdn/shop/files/iPhone_13_ProductRED_PDP_Image_Position-1A__GBEN_ed6a7e9a-a72d-4976-a3e9-b32defeb75a8.jpg?v=1717739370&width=823",
            ],
          },
        ],
      },
    };
  },

  methods: {
    updateSelectedVariantIndex(index) {
      this.selectedVariantIndex = index;
    },

    addToCart() {
      this.$emit("add-to-cart", this.selectedVariant);
    },
  },

  computed: {
    selectedVariant() {
      return this.product.variants[this.selectedVariantIndex];
    },
    name() {
      return this.product.brand + " " + this.product.name;
    },
  },

  template: `
  <div class="lg:grid lg:grid-cols-8 lg:items-start lg:gap-x-8">
        <!-- Image gallery -->
        <product-images :initial-thumbnail="selectedVariant.image"
            :galleries="selectedVariant.galleries">
        </product-images>

        <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 col-span-5">
            <product-info :name="name" :price="selectedVariant.price"
                :description="product.description">
            </product-info>

            <product-badges :stock="selectedVariant.stock" :premium-member="premiumMember">
            </product-badges>


            <div class="mt-6">
                <product-variants :variants="product.variants" :selected-variant="selectedVariant"
                    @update-selected-variant="updateSelectedVariantIndex">
                </product-variants>

                <product-atc :stock="selectedVariant.stock" @add-to-cart="addToCart"></product-atc>
            </div>
        </div>
    </div>
  `,
});
