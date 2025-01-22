<template>
  <main>
    <div class="container py-20">
      <div
        class="text-primary-on flex flex-col w-full justify-between gap-12 lg:mb-12 md:mb-8 mb-6"
      >
        <h2 class="text-display-m">菜單</h2>
        <p class="text-heading-s text-end">
          全天供應，依現場情況為主<br />點餐時間到打烊前一個小時
        </p>
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
import { menu } from '@/data/food.js'

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
