<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog class="relative" as="div" @close="closeMenuModal">
      <TransitionChild
        as="template"
        :enter="enterTransition"
        :enter-from="enterFrom"
        :enter-to="enterTo"
        :leave="leaveTransition"
        :leave-from="leaveFrom"
        :leave-to="leaveTo"
      >
        <DialogPanel
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary text-primary-on px-4 md:px-0"
        >
          <slot></slot>
        </DialogPanel>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>
<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionRoot, TransitionChild } from '@headlessui/vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  enterTransition: {
    type: String,
    default: 'transform duration-300',
  },
  enterFrom: {
    type: String,
    default: 'opacity-0',
  },
  enterTo: {
    type: String,
    default: 'opacity-100',
  },
  leaveTransition: {
    type: String,
    default: 'duration-200',
  },
  leaveFrom: {
    type: String,
    default: 'opacity-100',
  },
  leaveTo: {
    type: String,
    default: 'opacity-0',
  },
})

const emit = defineEmits(['close'])

const closeMenuModal = () => {
  emit('close')
}
</script>
