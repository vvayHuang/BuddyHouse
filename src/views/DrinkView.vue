<template>
  <main>
    <div class="container py-20">
      <div
        class="text-primary-on flex flex-col w-full justify-between gap-12 lg:mb-12 md:mb-8 mb-6"
      >
        <h2 class="text-display-m">飲品</h2>
        <p class="text-heading-s text-end">理性飲酒</p>
      </div>
      <ul class="flex justify-between flex-wrap lg:gap-12 md:gap-8 gap-6">
        <MenuCategory
          :class="['basis-full', 'lg:basis-5/12']"
          v-for="category in menu"
          :key="category.name"
          :category="category.name"
          :items="category.items"
          :isFlexCol="true"
        />
      </ul>
    </div>
  </main>
</template>

<script>
import MenuCategory from '@/components/MenuCategory.vue'
import { menu } from '@/data/drink'

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
