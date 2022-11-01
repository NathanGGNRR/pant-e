<template>
  <div class="parent justify-items-center mx-6">
    <div class="cursor-pointer" @click="goTo()">
      <img
        :src="item.imageUrl"
        :class="[
          { 'w-80': showDetails },
          { 'max-w-40 object-cover': !showDetails },
        ]"
        @error="$event.target.src = require('~/assets/img/default.png')"
      />
      <div :class="[{ 'w-80': showDetails }, { 'max-w-40': !showDetails }]">
        <p v-if="showDetails == true" class="uppercase">
          {{ item.category }}
        </p>
        <p>
          <strong>{{ item.productName }}</strong>
        </p>
        <p v-if="showDetails == true">
          <strong>{{ item.price }}€</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    item: { type: Object, required: true },
    showDetails: { type: Boolean, required: true },
  },
  methods: {
    goTo() {
      this.$router.push({ name: 'detail-id', params: { id: this.item.id } })
      this.$emit('close-modal')
    },
  },
}
</script>

<style scoped>
.parent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
