<template>
  <div class="marquee" :style="{ width: width }">
    <div ref="content" class="marquee-content">
      <div v-for="n in 10" :key="n" class="marquee-group">
        <span an class="marquee-text">
          <slot></slot>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
  width: {
    type: String,
    default: '100%',
  },
})

const content = ref(null)
let animation = null

onMounted(() => {
  const marqueeContent = content.value
  const contentWidth = marqueeContent.offsetWidth / 10

  animation = gsap.to(marqueeContent, {
    x: -contentWidth,
    duration: 15,
    repeat: -1,
    ease: 'none',
    onRepeat: () => {
      gsap.set(marqueeContent, { x: 0 })
    },
  })
})

onBeforeUnmount(() => {
  if (animation) {
    animation.kill()
  }
})
</script>

<style>
.marquee {
  overflow: hidden;
  white-space: normal;
  width: 100%;
}

.marquee-content {
  display: inline-flex;
  white-space: nowrap;
  overflow: hidden;
  gap: var(--marquee-gap, 3rem); /* 48px */
}

.marquee-text {
  display: inline;
  font-size: var(--marquee-font-size, 1rem);
  font-weight: var(--marquee-font-weight, 400);
  @apply text-primary-on;
}
</style>
