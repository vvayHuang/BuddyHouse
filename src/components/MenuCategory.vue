<template>
  <li class="list-none">
    <div class="text-primary-on">
      <h3 v-if="category" class="text-heading-s mb-8">{{ category }}</h3>
      <ul class="flex justify-between flex-wrap gap-6" :class="[{ 'flex-col': isFlexCol }]">
        <ListItem
          v-for="item in items"
          :key="item.name"
          :name="item.name"
          :price="item.price"
          :contents="item.contents"
        />
      </ul>
    </div>
  </li>
</template>

<script>
import ListItem from '@/components/ListItem.vue'

export default {
  components: {
    ListItem,
  },
  props: {
    category: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    isFlexCol: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
/* 添加你的樣式 */
</style>
