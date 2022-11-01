<template>
  <div class="flex bg-white">
    <!-- Liste des catégories -->
    <div class="pe-bg-light-gray-color pr-5 pl-5">
      <!-- Titre catégorie -->
      <div class="flex justify-center mt-6">
        <label for="Categories" class="font-extralight text-5xl"
          >Categories</label
        >
      </div>
      <div class="flex justify-around mt-8">
        <div>
          <ul class="text-xl leading-loose">
            <li v-for="aggregation in aggregations" :key="aggregation.key" :item="aggregation" class="cursor-pointer" @click="searchByCategory">{{ aggregation.key }}</li>
          </ul>
        </div>
        <div>
          <ul class="text-xl leading-loose">
            <li v-for="aggregation in aggregations" :key="aggregation.key" class="cursor-pointer" :item="aggregation">{{ aggregation.doc_count }}</li>
          </ul>
        </div>
      </div>
    </div>
    <!--  Les produits -->
    <div v-if="Array.isArray(products) && products.length" class="grid grid-cols-3 w-full gap-8 justify-items-center">
      <product
        v-for="product in products"
        :key="product.id"
        :item="product"
        :show-details="false"
        @close-modal="$emit('close-modal')"
      >
      </product>
    </div>
    <div v-else class="w-full text-xl text-center text-gray-400">
      Sorry, there is no item corresponding to your criterias 😢
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  computed: {
    products() {
      return this.$store.state.catalog.searchResults.products
    },
    aggregations() {
      return this.$store.state.catalog.searchResults.aggregations
    }
  },
  methods: {
    searchByCategory(e) {
      this.$store.dispatch('catalog/searchByCategory', e.target.innerText)
    },
  }
}
</script>
