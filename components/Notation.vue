<template>
  <div class="flex flex-grow items-center max-w-xs">
    <div
      v-for="(index,n) in etoiles" :key="index"
      class="flex flex-grow items-center content-start">
      <font-awesome-icon
        :id="n"
        class="text-2xl p-0" 
        :icon="['fas', 'star']"
      ></font-awesome-icon>
    </div>
    <div class="flex flex-grow items-center ml-32">
      {{ participant }}
      <font-awesome-icon
        class="text-4xl w-6 ml-4"
        :icon="['fas', 'user']"
      ></font-awesome-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notation',
  props: {
    participant: { type: Number, required: true },
    etoiles: { type: Number, required: true },
  },
}
</script>

