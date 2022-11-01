<template>
  <div class="h-infinite w-screen bg-black bg-opacity-50 fixed">
    <div
      class="
        modal-overlay
        flex-col
        max-w-2/3
        w-2/3
        bg-white
        mt-10
        justify-between
      "
    >
      <div class="flex">
        <font-awesome-icon
          class="header-icon mt-2 ml-2 text-5xl"
          :icon="['fas', 'arrow-left']"
          @click="$emit('close-modal')"
        ></font-awesome-icon>
        <div class="grid grid-cols-3 p-6 max-h-96 overflow-y-auto">
          <BasketProduct
            v-for="product in basket"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
      <div class="flex flex-row justify-between mx-6 items-center mb-4">
        <div class="text-black font-bold text-3xl">
          Total : {{ getTotal }} €
        </div>
        <div
          class="
            bg-black
            text-white
            font-bold
            px-5
            py-2
            mt-4
            cursor-pointer
            w-max
          "
        >
          COMMAND
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'BasketModal',
  middleware: 'authenticated',
  computed: {
    ...mapState('basket', ['basket']),
    ...mapGetters('basket', ['getTotal'])
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
}

.h-infinite {
  height: 2000px;
}
</style>
