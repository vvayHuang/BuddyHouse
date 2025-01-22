<template>
  <li class="basis-full lg:basis-5/12">
    <div class="flex justify-between gap-4">
      <div class="basis-3/4">
        <p v-if="name">{{ name }}</p>
        <span class="text-body-s mt-1 text-nowrap" v-if="contents">{{ contents }}</span>
      </div>
      <div v-if="price" class="basis-1/4">
        <p class="text-body-lg text-end">{{ price }}</p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    contents: {
      type: String,
      required: false,
    },
  },
}
</script>

<style scoped>
/* 添加你的樣式 */
</style>
