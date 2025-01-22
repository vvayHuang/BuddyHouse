<template>
  <button type="button" class="rounded-full overflow-hidden" :class="[buttonStyle]">
    <div class="state-layer"><slot></slot></div>
  </button>
</template>
<script setup>
const { buttonStyle } = defineProps({
  buttonStyle: String,
})
</script>
<style scoped>
.state-layer {
  @apply transition duration-300;
}
.btn-primary-lg .state-layer,
.btn-neutral-lg .state-layer,
.btn-lg .state-layer {
  @apply p-3;
}

.btn-primary-sm .state-layer,
.btn-neutral-sm .state-layer,
.btn-lg .state-layer {
  @apply p-2;
}

.btn-lg {
  @apply text-background-on text-label-lg;
}
.btn-sm {
  @apply text-background-on text-label-s;
}
.btn-primary-lg {
  @apply bg-primary text-primary-on text-label-lg;
}
.btn-primary-sm {
  @apply bg-primary text-primary-on text-label-s;
}
.btn-neutral-lg {
  @apply bg-surface-container text-surface-variant-on text-label-lg;
}
.btn-neutral-sm {
  @apply bg-surface-container text-surface-variant-on text-label-s;
}
.btn-primary-lg:hover .state-layer,
.btn-primary-sm:hover .state-layer {
  @apply bg-primary-state-layers-0.16;
}
</style>
