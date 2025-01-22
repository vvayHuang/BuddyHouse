<template>
  <main>
    <div class="container py-20">
      <div
        class="text-primary-on flex flex-col w-full justify-between gap-12 lg:mb-12 md:mb-8 mb-6"
      >
        <h2 class="text-display-m">披薩</h2>
        <p class="text-heading-s text-end">供應至晚上10:30</p>
      </div>
      <div class="flex flex-col lg:gap-12 md:gap-8 gap-6">
        <MenuCategory
          v-for="category in menu"
          :key="category.name"
          :category="category.name"
          :items="category.items"
        />
      </div>
    </div>
  </main>
</template>

<script>
import MenuCategory from '@/components/MenuCategory.vue'
import { menu } from '@/data/pizza.js'

export default {
  components: {
    MenuCategory,
  },
  data() {
    return {
      menu,
    }
  },
}
</script>

<style scoped>
/* 添加你的樣式 */
</style>
