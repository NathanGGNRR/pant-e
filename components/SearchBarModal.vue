<template>
  <div class="h-infinite w-screen bg-black bg-opacity-50 fixed">
  <div class="modal-overlay flex-col overflow-y-scroll bg-white mt-20">
    <div class="flex justify-end" >
        <font-awesome-icon
          class="header-icon text-6xl p-4 cursor-pointer"
          :icon="['fas', 'times']"
          @click="$emit('close-modal')"
        ></font-awesome-icon>
      </div>
      <div class="flex modal border-4 mx-5 p-4 mb-10 border-opacity-100">
        <font-awesome-icon
          class="header-icon mt-auto mb-auto text-4xl mx-6"
          :icon="['fas', 'arrow-left']"
          @click="$emit('close-modal')"
        ></font-awesome-icon>
        <input
          id="srcProduct"
          v-model="searchProduct"
          class="flex w-full"
          type="search"
          placeholder="Search a product"
        />
      </div>
      <Search
        v-if="searchProduct.length > 0"
        @close-modal="$emit('close-modal')"
      />
    </div>
  </div>
</template>

<script>
import { debounce } from 'debounce'

export default {
  data() {
    return {
      searchProduct: ''
    }
  },
  watch: {
    searchProduct(value) {
      this.search(value)
    }
  },
  methods: {
    search: debounce(function (value) {
      this.$store.dispatch('catalog/search', value)
    }, 500)
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  transform: translateX(-50%) translateY(-50%);
  top: 25%;
  left: 50%;
  display: flex;
  max-height: 60%;
  width: 72em;
}

.modal {
  text-align: center;
  background-color: white;
  border-radius: 20px;
}

.h-infinite {
  height: 5000px;
}
</style>
