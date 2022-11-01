<template>
  <div class="flex flex-row items-center justify-center">
    <div class="flex flex-row h-full px-48">
      <!-- <Caroussel  /> -->
      <img
        :src="'https://www.victoriassecret.com' + product.imageUrl"
        class="w-96"
        :alt="product.productName"
        @error="$event.target.src = require('~/assets/img/default.png')"
      />
      <div class="ml-36">
        <p class="text-1xl mb-1">{{ product.brand }}</p>
        <p class="text-4xl mb-1">{{ product.productName }}</p>
        <div class="flex flex-row items-center mb-4">
          <p class="text-4xl">{{ product.price }} €</p>
          <p>Dont TVA</p>
        </div>
        <Notation
          :participant="product.reviewNumber"
          :etoiles="product.note"
          class="mb-4"
        />
        <p class="text-2xl mb-2">Description</p>
        <p>
          {{ product.description }}
        </p>
        <div
          v-if="isAuthenticated"
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
          @click="$addToBasket($route.params.id)"
        >
          AJOUTER
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Notation from '~/components/Notation.vue'
// import Caroussel from '~/components/Caroussel.vue'

export default {
  components: {
    Notation,
  },
  data() {
    return {
      items: [
        {
          image: 'img/home/1.jpg',
          title: 'Découvrez la nouvelle collection',
          name: 'DIIAGE',
          by: 'Baptiste ROUILLON',
          discoverBtn: true,
        },
        {
          image: 'img/home/2.jpg',
          title: 'Envie de te battre en petite tenue ?',
          name: 'HARAKIRI',
          by: 'Raphaël DELCROIX',
          discoverBtn: true,
        },
        {
          image: 'img/home/3.jpg',
          title: 'Une collection qui vous renforce',
          name: 'INVICIBLE',
          by: 'Benjamin SORRIAUX',
          discoverBtn: true,
        },
        {
          image: 'img/home/4.jpg',
          title: 'Collection automne/hiver',
          name: 'DIVERSITÉ',
          by: 'Nathan GAGNIARRE',
          discoverBtn: true,
        },
      ],
    }
  },
  computed: {
    ...mapState('detail', ['product']),
  },
  created() {
    this.$store.dispatch('detail/getDetails', this.$route.params.id)
  },
  methods: {
    ...mapGetters(['isAuthenticated']),
  },
}
</script>
