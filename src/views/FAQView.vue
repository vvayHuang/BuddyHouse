<template>
  <main>
    <div class="container py-20">
      <div
        class="text-primary-on flex flex-col w-full justify-between gap-12 lg:mb-12 md:mb-8 mb-6"
      >
        <h2 class="text-display-m">常見問題</h2>
      </div>
      <ul class="flex flex-col justify-between flex-wrap lg:gap-12 md:gap-8 gap-6 text-primary-on">
        <li v-for="(item, index) in faq" :key="index">
          <h3 class="text-heading-s mb-6">{{ item.question }}</h3>
          <p class="text-body-lg">{{ item.answer }}</p>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import { faq } from '@/data/faq'

export default {
  data() {
    return {
      faq,
    }
  },
}
</script>

<style scoped>
/* 添加你的樣式 */
</style>
