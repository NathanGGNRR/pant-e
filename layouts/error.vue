<template>
  <div class="flex flex-col justify-center items-center mt-10">
    <div class="text-black text-2xl font-bold">Une erreur est survenue :</div>
    <div class="font-mono text-black text-6xl">
      {{ error.statusCode }}
    </div>
    <nuxt-link to="/home">Revenir à la page d'accueil</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: ['error']
}
</script>
