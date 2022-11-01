<template>
  <div>
    <div
      class="
        font-bold
        text-3xl
        md:mt-28
        lg:ml-32 lg:text-left lg:mb-0
        text-center
        mb-10
        mt-10
      "
    >
      <p v-if="currentCategory != null">
        Products for category
        {{ currentCategory.categoryName }}
      </p>
      <p v-else>Our products</p>
    </div>
    <div
      class="
        grid
        2xl:grid-cols-4
        xl:grid-cols-3
        md:grid-cols-2
        justify-items-center
        gap-4
        md:m-20
      "
    >
      <product
        v-for="product in products"
        :key="product.id"
        :item="product"
        :show-details="showDetails"
      ></product>
    </div>
    <div class="flex flex-grow justify-center">
      <a
        ><font-awesome-icon
          v-if="hasPreviousPage"
          name="back-page"
          class="text-2xl p-0 mr-6"
          :icon="['fas', 'chevron-left']"
          @click="currentPage--"
        ></font-awesome-icon
      ></a>
      Page
      <input
        v-model="currentPage"
        type="number"
        class="ml-2 mr-2 w-10 border-solid"
      />
      on {{ totalPages }}
      <font-awesome-icon
        v-if="hasNextPage"
        name="back-page"
        class="text-2xl p-0 ml-6"
        :icon="['fas', 'chevron-right']"
        @click="currentPage++"
      ></font-awesome-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Catalog',
  async asyncData({ store }) {
    await store.dispatch('catalog/getCatalog')
  },
  data() {
    return {
      showDetails: true
    }
  },
  head: {
    title: 'Catalog page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Le catalogue avec le listing de tous les produits.'
      }
    ]
  },
  computed: {
    products() {
      return this.$store.state.catalog.products
    },
    currentCategory() {
      return this.$store.state.catalog.currentCategory
    },
    totalPages() {
      return this.$store.state.catalog.totalPages
    },
    currentPage: {
      get() {
        return this.$store.state.catalog.currentPage
      },
      async set(newValue) {
        await this.$store.dispatch('catalog/updateCurrentPage', newValue)
        await this.$store.dispatch('catalog/getCatalog')
      }
    },
    hasPreviousPage() {
      return this.$store.state.catalog.hasPreviousPage
    },
    hasNextPage() {
      return this.$store.state.catalog.hasNextPage
    }
  },
}
</script>
