<template>
  <div class="flex flex-col items-center justify-center">
    <div class="text-black font-normal text-2xl">{{ title }}</div>
    <div class="text-black font-light text-xl">{{ subTitle }}</div>
  </div>
</template>

<script>
export default {
  name: 'HomeAdvice',
  props: {
    title: { type: String, required: true },
    subTitle: { type: String, required: true }
  }
}
</script>
