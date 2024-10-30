app.component("review-form", {
  data() {
    return {
      name: "",
      email: "",
      rating: null,
    };
  },

  computed: {
    enableSubmit() {
      return (
        !!this.name.trim().length && !!this.email.trim().length && !!this.rating
      );
    },
  },

  methods: {
    onSubmit() {
      this.$emit("add-review", {
        name: this.name,
        email: this.email,
        rating: this.rating,
      });

      this.name = "";
      this.email = "";
      this.rating = null;
    },
  },

  template: `
    <form class="max-w-lg" @submit.prevent="onSubmit">
        <div class="pt-10">
            <h2 class="text-lg font-medium text-gray-900">Review</h2>
            <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">

                <div class="sm:col-span-2">
                    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                    <div class="mt-1">
                    <input v-model="name" type="text" name="name" id="name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    </div>
                </div>

                <div class="sm:col-span-2">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <div class="mt-1">
                    <input v-model="email" type="email" name="email" id="email"  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    </div>
                </div>

                <div class="sm:col-span-2">
                    <label for="rating" class="block text-sm font-medium text-gray-700">Rating</label>
                    <div class="mt-1">
                        <select v-model.number="rating" id="rating" name="rating"  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div> 
            </div>
            
            <div class="flex justify-end mt-5">
               <button type="submit" class="rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    :class="{'disabled:cursor-not-allowed disabled:bg-gray-500': !enableSubmit}"
                    :disabled="!enableSubmit" 
                >
                    Submit
                </button> 
            </div>
        </div> 
    </form>
    `,
});
