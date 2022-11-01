<template>
  <div
    class="
      flex flex-col
      justify-between
      min-h-screen
      relative
      overflow-x-hidden
    "
  >
    <div>
      <div class="flex flex-row items-center justify-between">
        <NuxtLink to="/home">
          <img
            class="flex-none h-14 w-20 p-2 cursor-pointer"
            src="~/assets/img/logo.svg"
        /></NuxtLink>

        <NuxtLink to="/home">
          <div
            class="
              flex flex-grow
              justify-center
              items-center
              text-5xl
              font-light
              cursor-pointer
            "
          >
            PANT-E
          </div>
        </NuxtLink>

        <div class="flex flex-row justify-between mr-3">
          <font-awesome-icon
            class="header-icon"
            :icon="['fas', 'search']"
            @click="openModal('search')"
          ></font-awesome-icon>
          <div class="relative max-content">
            <div
              v-if="basket && basket.length"
              class="
                absolute
                top-1
                right-6
                bg-red-600
                rounded-full
                h-6
                w-6
                flex
                justify-center
                items-center
                text-white
                font-bold
                p-2
                text-caption
              "
            >
              {{ getQuantity }}
            </div>
            <font-awesome-icon
              v-if="isAuthenticated()"
              class="header-icon mx-6 text-6xl"
              :icon="['fas', 'shopping-bag']"
              @click="openModal('basket')"
            ></font-awesome-icon>
          </div>
          <font-awesome-icon
            v-if="!isAuthenticated()"
            class="header-icon text-6xl"
            :icon="['fas', 'user']"
            @click="login"
          ></font-awesome-icon>
          <font-awesome-icon
            v-else
            class="header-icon"
            :icon="['fas', 'user-times']"
            @click="logout"
          ></font-awesome-icon>
        </div>
      </div>
      <SearchBarModal
        v-show="showSearchModal"
        class="z-50 h-full"
        @close-modal="showSearchModal = false"
      />
      <BasketModal
        v-show="showBasketModal"
        class="fixed top-0 left-0 z-50 h-full"
        @close-modal="showBasketModal = false"
      />
    </div>
    <Nuxt />
    <div
      class="
        flex flex-col
        md:flex-row md:py-8
        p-2
        justify-between
        items-center
        pe-bg-light-gray-color
      "
    >
      <div class="flex flex-row md:flex-col items-center md:ml-3">
        <img
          class="flex-none h-14 w-20 md:h-18 md:w-24 p-2"
          src="~/assets/img/logo.svg"
        />

        <div
          class="
            flex flex-grow
            justify-center
            items-center
            text-2xl
            md:text-3xl
            font-light
          "
        >
          PANT-E
        </div>
      </div>

      <div class="md:flex md:flex-col items-center hidden">
        <div
          class="
            flex flex-grow
            justify-center
            items-center
            text-3xl
            font-normal
          "
        >
          Contact us
        </div>

        <div
          class="flex flex-grow justify-center items-center text-2xl font-light"
        >
          baptiste.rouillon@diiage.org
        </div>
      </div>

      <div class="flex-none flex flex-row justify-between mr-3">
        <font-awesome-icon
          class="md:footer-icon footer-icon-sm text-4xl"
          :icon="['fab', 'instagram']"
        ></font-awesome-icon>

        <font-awesome-icon
          class="md:footer-icon footer-icon-sm mx-6 text-4xl"
          :icon="['fab', 'twitter']"
        ></font-awesome-icon>

        <font-awesome-icon
          class="md:footer-icon footer-icon-sm text-4xl"
          :icon="['fab', 'facebook']"
        ></font-awesome-icon>
      </div>
    </div>
    <SearchBarModal
      v-show="showSearchModal"
      class="fixed top-0 left-0 z-50 h-full"
      @close-modal="showSearchModal = false"
    />
    <BasketModal
      v-if="isAuthenticated()"
      v-show="showBasketModal"
      class="fixed top-0 left-0 z-50 h-full"
      @close-modal="showBasketModal = false"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Default',
  data() {
    return {
      showSearchModal: false,
      showBasketModal: false,
    }
  },
  computed: {
    ...mapState('basket', ['basket']),
    ...mapState('auth', ['user']),
    getQuantity() {
      return this.basket
        .map((product) => product.quantity)
        .reduce((a, b) => a + b, 0)
    },
  },
  methods: {
    ...mapGetters(['isAuthenticated']),
    openModal(modal) {
      if (modal === 'search') {
        this.showSearchModal = true
        this.showBasketModal = false
      } else {
        this.showBasketModal = true
        this.showSearchModal = false
      }
    },
    async login() {
      await this.$auth.loginWith('keycloak')
    },
    async logout() {
      await this.$auth.logout()
      this.$auth.strategy.token.reset()
    },
  },
}
</script>

<style lang="scss">
html {
  font-family: 'Montserrat';
}

.header-icon {
  @apply text-5xl pe-text-gray-color p-2 transition-colors duration-500;

  &:hover {
    @apply cursor-pointer pe-text-dark-gray-color;
  }
}

.header-icon-sm {
  @apply text-3xl pe-text-gray-color p-2 transition-colors duration-500;

  &:hover {
    @apply cursor-pointer pe-text-dark-gray-color;
  }
}
</style>
