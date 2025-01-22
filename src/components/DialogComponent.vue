<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeDialog" class="relative z-10">
      <!-- dialog backdrop -->
      <TransitionChild
        as="template"
        :enter="enterTransition"
        :enter-from="enterFrom"
        :enter-to="enterTo"
        :leave="leaveTransition"
        :leave-from="leaveFrom"
        :leave-to="leaveTo"
      >
        <div class="fixed inset-0 bg-primary/25 backdrop-blur" aria-hidden="true" />
      </TransitionChild>
      <!-- content -->
      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center md:p-4">
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
              class="lg:p-6 p-2 rounded-lg bg-surface flex items-start gap-6 lg:w-[1024px] lg:flex-row flex-col md:p-6"
            >
              <slot></slot>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
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

const closeDialog = () => {
  emit('close')
}
</script>
