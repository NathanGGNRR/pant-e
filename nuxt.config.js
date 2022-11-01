import { join } from 'path'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PANT-E',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'PANT-E est un site de commerce en ligne de vente de lingeries fines.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/static/favicon.ico' }],
  },

  router: {
    middleware: 'error'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/tailwind.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/basket.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-purgecss',
    '@nuxtjs/style-resources',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: join(__dirname, 'tailwind.config.js'),
      },
    },
  },

  purgeCSS: { mode: 'postcss' },

  generate: {
    interval: 2000,
  },

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },

  styleResources: {
    scss: ['~/assets/scss/main.scss'],
  },

  auth: {
    redirect: {
      login: '/',
      logout: '/',
      callback: '/callback',
      home: '/home',
    },
    strategies: {
      keycloak: {
        scheme: 'oauth2',
        endpoints: {
          authorization:
            'http://localhost:8080/auth/realms/myrealm/protocol/openid-connect/auth',
          token:
            'http://localhost:8080/auth/realms/myrealm/protocol/openid-connect/token',
          userInfo:
            'http://localhost:8080/auth/realms/myrealm/protocol/openid-connect/userinfo',
          logout:
            'http://localhost:8080/auth/realms/myrealm/protocol/openid-connect/logout?redirect_uri=' +
            encodeURIComponent('http://localhost:3000/home'),
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          name: 'Authorization',
          maxAge: 1800,
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30,
        },
        responseType: 'code',
        grantType: 'authorization_code',
        clientId: 'victoria-app',
        scope: ['openid', 'profile', 'email'],
        redirectUri: 'http://localhost:3000/callback',
        logoutRedirectUri: 'http://localhost:3000/home',
        codeChallengeMethod: 'S256',
      },
    },
  }
}
