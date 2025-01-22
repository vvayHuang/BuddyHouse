<template>
  <button type="button" class="rounded-3xl overflow-hidden" :class="[buttonStyle]">
    <div class="state-layer">
      <slot></slot>
    </div>
  </button>
</template>
<script setup>
const { buttonStyle } = defineProps({
  buttonStyle: String,
})
</script>
<style scoped>
.state-layer {
  @apply md:px-6 md:py-3 px-3 py-2 transition duration-300;
}
.btn-primary {
  @apply bg-primary text-primary-on md:text-label-lg text-label-s border border-primary;
}
.btn-neutral {
  @apply bg-surface-container text-surface-variant-on md:text-label-lg text-label-s;
}
.btn-primary:hover {
  .state-layer {
    @apply bg-primary-state-layers-0.16;
  }
}
.btn-neutral:hover {
  .state-layer {
    @apply bg-surface-variant-state-layers-0.16;
  }
}
</style>
