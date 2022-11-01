<template>
  <VueSlickCarousel
    v-bind="settings"
    class="w-3/4 height-500px"
    :arrows="false"
    :dots="true"
  >
    <div
      v-for="(item, index) in items"
      :key="index"
      class="flex flex-row items-center justify-center"
    >
      <img
        :src="require(`~/assets/${item.image}`)"
        class="height-500px object-fill"
      />
    </div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    VueSlickCarousel,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      settings: {
        dots: false,
        arrows: true,
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  },
}
</script>

<style lang="scss">
.slick-prev:before,
.slick-next:before {
  color: black !important;
}
</style>
