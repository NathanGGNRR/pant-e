<template>
  <div class="flex relative" :class="`height-${height}px`">
    <div
      class="
        bg-white
        backdrop-opacity-30
        absolute
        top-2/4
        transform
        -translate-y-2/4
        p-4
        z-40
      "
      @click="back()"
    >
      <font-awesome-icon
        class="chevron-icon text-8xl"
        :icon="['fas', 'chevron-left']"
      ></font-awesome-icon>
    </div>
    <div class="w-full grid" :class="`grid-cols-${displayedNumber} gap-${gap}`">
      <div
        v-for="index in displayedNumber"
        :key="index"
        class="w-full relative"
      >
        <div
          v-if="hasContentText"
          class="flex flex-col absolute w-2/4 break-words inset-x-1/4 bottom-10"
        >
          <div class="text-white text-5xl font-light">
            {{ item(pageIndex, index).title }}
          </div>
          <div class="flex flex-row items-end">
            <div class="text-white text-6xl font-bold">
              {{ item(pageIndex, index).name }}
            </div>
            <div class="text-white text-xl font-bold ml-2">
              by {{ item(pageIndex, index).by }}
            </div>
          </div>
          <div
            v-if="item(pageIndex, index).discoverBtn"
            class="
              flex flex-row
              items-center
              justify-center
              bg-gray-300 bg-opacity-70
              text-white
              cursor-pointer
              w-1/4
              text-xl
              h-16
              text-center
              mt-2
              font-light
              z-0
            "
          >
            Discover
          </div>
        </div>
        <img
          class="w-full object-cover"
          :class="[
            { 'border-8 border-gray-300': hasBorder },
            `height-${height}px`
          ]"
          :src="require(`~/assets/${item(pageIndex, index).image}`)"
        />
        <div v-if="hasFooterText" class="flex flex-col">
          <div class="text-black">
            {{ item(pageIndex, index).title }}
          </div>
          <div class="text-black">
            {{ item(pageIndex, index).category }}
          </div>
          <div class="text-black font-bold">
            {{ item(pageIndex, index).cost }} €
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        bg-white
        backdrop-opacity-30
        absolute
        right-0
        top-2/4
        transform
        -translate-y-2/4
        p-4
        z-40
      "
      @click="next()"
    >
      <font-awesome-icon
        class="chevron-icon text-8xl"
        :icon="['fas', 'chevron-right']"
      ></font-awesome-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    items: { type: Array, required: true },
    displayedNumber: { type: Number, default: 1 },
    height: { type: Number, default: 500 },
    gap: { type: Number, default: 4 },
    hasContentText: { type: Boolean, default: true },
    hasBorder: { type: Boolean, default: false },
    hasFooterText: { type: Boolean, default: false }
  },
  data() {
    return {
      pageIndex: 1,
      translateDuration: 500
    }
  },
  methods: {
    next() {
      this.pageIndex =
        this.items.length <= this.pageIndex * this.displayedNumber
          ? 1
          : this.pageIndex + 1
    },
    back() {
      this.pageIndex =
        this.pageIndex - 1 < 1
          ? this.items.length / this.displayedNumber
          : this.pageIndex - 1
    },
    item(index, i) {
      return this.items[(index - 1) * this.displayedNumber + (i - 1)]
    }
  }
}
</script>

<style scoped lang="scss">
.chevron-icon {
  @apply pe-text-dark-gray-color p-2 transition-colors duration-500;

  &:hover {
    @apply cursor-pointer text-black;
  }
}
</style>
