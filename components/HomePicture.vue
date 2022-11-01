<template>
  <div class="flex flex-col relative">
    <div class="flex flex-col absolute left-10 bottom-10">
      <div class="text-white font-bold text-2xl">
        {{ title }}
      </div>
      <div
        v-if="hasDiscoverBtn"
        class="
          flex
          items-center
          justify-center
          bg-gray-300 bg-opacity-70
          text-white
          cursor-pointer
          text-xl
          h-16
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
      :class="`height-${height}px`"
      :src="require(`~/assets/${image}`)"
    />
  </div>
</template>

<script>
export default {
  name: 'HomePicture',
  props: {
    image: { type: String, required: true },
    title: { type: String, required: true },
    height: { type: Number, default: 500 },
    hasDiscoverBtn: { type: Boolean, default: false }
  }
}
</script>
