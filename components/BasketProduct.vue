<template>
  <div class="flex flex-col relative w-full items-center">
    <div class="flex relative justify-center w-max">
      <font-awesome-icon
        class="header-icon text-5xl absolute top-1 left-1"
        :icon="['fas', 'trash']"
        @click="$removeToBasket(product.id, true)"
      ></font-awesome-icon>
      <img :src="product.image" class="max-h-64 h-64 x object-cover" />
    </div>
    <div class="flex flex-row justify-between mx-4 items-end mt-2">
      <div class="flex flex-col text-black">
        <div class="font-semibold text-sm">
          {{ product.title }}
        </div>
        <div class="font-light text-sm">
          {{ product.price }} € - {{ product.size }}
        </div>
      </div>
      <div class="flex flex-row items-center">
        <font-awesome-icon
          class="header-icon mr-2 text-4xl"
          :icon="['fas', 'minus']"
          @click="$removeToBasket(product.id)"
        ></font-awesome-icon>
        <div>
          {{ product.quantity }}
        </div>
        <font-awesome-icon
          class="header-icon ml-2 text-4xl"
          :icon="['fas', 'plus']"
          @click="$addToBasket(product.id)"
        ></font-awesome-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasketProduct',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  head() {
    return {
      title: this.name,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.product.title
        },
        {
          hid: 'description',
          name: 'description',
          content: this.product.description
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.product.image
        }
      ]
    }
  }
}
</script>
