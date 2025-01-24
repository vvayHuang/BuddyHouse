<template>
  <div class="marquee" :style="{ width: width }">
    <div ref="content" class="marquee-content">
      <div v-for="(item, index) in texts" :key="index" class="marquee-text">
        <template v-if="index === 0">
          <div
            v-for="(line, lineIndex) in item.split('\n')"
            :key="lineIndex"
            class="first-text-line"
          >
            {{ line }}
          </div>
        </template>
        <template v-else>
          {{ item }}
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
  texts: {
    type: Array,
    default: () => ['2025 buddy house copy right', 'design by way huang'],
  },
  width: {
    type: String,
    default: '100%',
  },
})

const content = ref(null)
let animation = null

onMounted(() => {
  const marqueeContent = content.value
  const containerWidth = marqueeContent.parentElement.offsetWidth
  const textWidth = marqueeContent.offsetWidth
  let repeats = 1

  // 確保內容寬度至少是容器的兩倍
  if (textWidth < containerWidth) {
    repeats = Math.ceil(containerWidth / textWidth) + 1
    const textElements = props.texts
      .map((text) => `<span class="marquee-text">${text}</span>`)
      .join('')

    marqueeContent.innerHTML = Array(repeats).fill(textElements).join('')
  }

  // 重新計算實際的文字寬度
  const actualTextWidth = marqueeContent.offsetWidth / repeats

  animation = gsap.to(marqueeContent, {
    x: -actualTextWidth,
    duration: 10,
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
  white-space: normal;
  width: fit-content;
}

.marquee-text {
  display: inline-block;
  @apply text-body-m text-primary-on text-center;
}

.first-text-line {
  white-space: nowrap;
  line-height: 1.2;
}
</style>
