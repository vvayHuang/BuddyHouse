<template>
  <header class="text-primary-on w-full fixed z-10">
    <nav class="flex items-center justify-between lg:px-12 lg:py-3 py-2 px-4" aria-label="Global">
      <div class="flex lg:flex-1">
        <button type="button" class="text-primary-on text-label-lg p-2" @click="openMenuModal">
          <span class="sr-only lg:not-sr-only">菜單</span>
          <IconBars3 class="lg:hidden" aria-hidden="true" />
        </button>
      </div>
      <RouterLink to="/"><Logo /></RouterLink>
      <div class="flex lg:flex-1 justify-end">
        <button type="button" class="text-primary-on text-label-lg p-2" @click="openBookingModal">
          <span class="sr-only lg:not-sr-only">預約</span>
          <IconCalendar class="lg:hidden" aria-hidden="true" />
        </button>
      </div>
    </nav>
    <!-- menu dropdown -->
    <MenuDropdown
      :isOpen="isOpenMenu"
      @close="closeMenuModal"
      enter="transform transition duration-500"
      enter-from="-translate-y-full opacity-0"
      enter-to="translate-y-0 opacity-100"
      leave="transform duration-500 transition ease-in-out"
      leave-from="translate-y-0 opacity-100"
      leave-to="-translate-y-full opacity-0"
    >
      <div class="flex min-h-full">
        <div class="lg:basis-1/2 md:basis-1/4">
          <div class="flex flex-col md:p-10 md:justify-between gap-6 h-full py-12">
            <div class="flex items-center">
              <IconButtons buttonStyle="btn-primary-lg" @click="closeMenuModal">
                <IconXmark aria-hidden="true" />
              </IconButtons>
            </div>
            <div class="mt-6 flow-root">
              <div class="py-6">
                <RouterLink
                  to="/food"
                  @click="closeMenuModal"
                  @mouseover="changeImage('food')"
                  @mouseleave="resetImage"
                  class="text-display-m block rounded-lg px-3 py-6"
                  >菜單</RouterLink
                >
                <RouterLink
                  to="/pizza"
                  @click="closeMenuModal"
                  @mouseover="changeImage('pizza')"
                  @mouseleave="resetImage"
                  class="text-display-m block rounded-lg px-3 py-6"
                  >披薩</RouterLink
                >
                <RouterLink
                  to="/drink"
                  @click="closeMenuModal"
                  @mouseover="changeImage('drink')"
                  @mouseleave="resetImage"
                  class="text-display-m block rounded-lg px-3 py-6"
                  >飲品</RouterLink
                >
              </div>
            </div>
            <div class="py-6">
              <RouterLink
                to="/FAQ"
                @click="closeMenuModal"
                @mouseover="changeImage('faq')"
                @mouseleave="resetImage"
                class="text-title-lg block rounded-lg px-3 py-6"
                >常見問題</RouterLink
              >
            </div>
            <div class="flex gap-2 items-center">
              <button
                @click="themeStore.setTheme('light')"
                :class="theme.value === 'light' ? 'font-bold underline' : ''"
                aria-label="亮色模式"
              >
                <SunIcon class="w-6 h-6" />
              </button>
              <button
                @click="themeStore.setTheme('dark')"
                :class="theme.value === 'dark' ? 'font-bold underline' : ''"
                aria-label="暗色模式"
              >
                <MoonIcon class="w-6 h-6" />
              </button>
              <button
                @click="themeStore.setTheme('auto')"
                :class="theme.value === 'auto' ? 'font-bold underline' : ''"
                aria-label="自動模式"
              >
                <ComputerDesktopIcon class="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        <div class="lg:basis-1/2 md:basis-3/4">
          <div class="max-w-4xl max-h-full hidden md:block relative">
            <transition name="fade" mode="default">
              <img
                :key="currentImage"
                class="w-full h-screen object-cover absolute inset-0"
                :src="currentImage"
                :alt="currentImageAlt"
              />
            </transition>
          </div>
        </div>
      </div>
    </MenuDropdown>
    <!-- booking dialog -->
    <DialogComponent
      :isOpen="isOpenBooking"
      @close="closeBookingModal"
      enter="duration-300 ease-out"
      enter-from="opacity-0 scale-95"
      enter-to="opacity-100 scale-100"
      leave="duration-200 ease-in"
      leave-from="opacity-100 scale-100"
      leave-to="opacity-0 scale-95"
    >
      <div class="basis-1/2">
        <div class="flex md:items-start flex-col md:flex-row md:gap-4 gap-2">
          <IconButtons buttonStyle=" btn-lg" @click="closeBookingModal">
            <IconXmark aria-hidden="true" />
          </IconButtons>
          <div>
            <DialogTitle
              as="h3"
              class="text-display-m capitalize lg:text-end md:text-start text-surface-on"
            >
              buddy house
            </DialogTitle>
            <div class="md:mt-12 sm:mt-2">
              <p class="text-heading-s md:text-end sm:text-start text-surface-on">
                10 人以上的團體預訂，請聯絡我們 buddyhouse@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="basis-1/2 w-full">
        <transition
          mode="out-in"
          enter-active-class="transition duration-500 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition duration-300 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="submitSuccess"
            key="success"
            class="flex flex-col items-center justify-center gap-4 py-20 text-center"
          >
            <CheckCircleIcon class="h-16 w-16 text-primary" aria-hidden="true" />
            <p class="text-heading-m text-surface-on">預約成功，我們將盡快與您確認！</p>
          </div>
          <div v-else key="form">
            <Listbox
              v-for="item in solutions"
              :key="item.name"
              v-model="selectedOptions[item.name]"
              by="value"
            >
              <div class="relative mb-6">
                <span class="mb-2 text-label-lg inline-block text-surface-on">{{ item.name }}</span>
                <ListboxButton
                  :class="[
                    errors[item.errorKey] ? 'border-error' : 'border-outline',
                    'relative w-full cursor-default rounded-lg border bg-surface py-2 pr-3 pl-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm',
                  ]"
                >
                  <span
                    class="pointer-events-none absolute inset-y-0 left-3 flex items-center pr-2"
                  >
                    <component :is="item.icon" class="h-5 w-5 text-surface-on" aria-hidden="true" />
                  </span>
                  <span class="block truncate text-surface-on">{{
                    selectedOptions[item.name]?.label || '請選擇'
                  }}</span>
                  <span
                    class="pointer-events-none absolute inset-y-0 right-3 flex items-center pr-2"
                  >
                    <ChevronDownIcon class="h-5 w-5 text-surface-on" aria-hidden="true" />
                  </span>
                </ListboxButton>

                <transition
                  leave-active-class="transition duration-100 ease-in"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <ListboxOptions
                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-surface py-1 text-surface-on shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-10"
                  >
                    <ListboxOption
                      v-for="option in item.options"
                      :key="option.value"
                      :value="option"
                      as="template"
                      v-slot="{ active, selected }"
                    >
                      <li
                        :class="[
                          active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-10 pr-4',
                        ]"
                      >
                        <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">
                          {{ option.label }}
                        </span>
                        <span
                          v-if="selected"
                          class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                        >
                        </span>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
                <p v-if="errors[item.errorKey]" class="mt-1 text-body-s text-error">
                  {{ errors[item.errorKey] }}
                </p>
              </div>
            </Listbox>
            <div class="grid grid-cols-1 gap-6">
              <label class="block">
                <span class="mb-2 text-label-lg inline-block text-surface-on">姓名</span>
                <input
                  v-model="form.name"
                  type="text"
                  :class="[
                    errors.name ? 'border-error' : 'border-outline',
                    'relative w-full cursor-default rounded-lg border bg-surface py-2 px-3 text-surface-on text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-300 sm:text-sm',
                  ]"
                  placeholder=""
                />
                <p v-if="errors.name" class="mt-1 text-body-s text-error">{{ errors.name }}</p>
              </label>
              <label class="block">
                <span class="mb-2 text-label-lg inline-block text-surface-on">電子信箱</span>
                <input
                  v-model="form.email"
                  type="email"
                  :class="[
                    errors.email ? 'border-error' : 'border-outline',
                    'relative w-full cursor-default rounded-lg border bg-surface py-2 px-3 text-surface-on text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-300 sm:text-sm',
                  ]"
                  placeholder="example@mail.com"
                />
                <p v-if="errors.email" class="mt-1 text-body-s text-error">{{ errors.email }}</p>
              </label>
              <label class="block">
                <span class="mb-2 text-label-lg inline-block text-surface-on">電話</span>
                <input
                  v-model="form.phone"
                  type="tel"
                  :class="[
                    errors.phone ? 'border-error' : 'border-outline',
                    'relative w-full cursor-default rounded-lg border bg-surface py-2 px-3 text-surface-on text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-300 sm:text-sm',
                  ]"
                  placeholder="091234567"
                />
                <p v-if="errors.phone" class="mt-1 text-body-s text-error">{{ errors.phone }}</p>
              </label>
            </div>
            <p v-if="submitError" class="text-heading-s text-error mt-4">{{ submitError }}</p>
            <div class="py-4 flex justify-end gap-6 border-t border-outline-variant mt-6">
              <CommonButtons @click="closeBookingModal" :class="['btn-neutral']"
                >取消</CommonButtons
              >
              <CommonButtons
                @click="submitBooking"
                :class="['btn-primary']"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? '送出中...' : '送出' }}
              </CommonButtons>
            </div>
          </div>
        </transition>
      </div>
    </DialogComponent>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { DialogTitle, Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { CalendarIcon, ChevronDownIcon, ClockIcon, UsersIcon } from '@heroicons/vue/20/solid'
import { SunIcon, MoonIcon, ComputerDesktopIcon, CheckCircleIcon } from '@heroicons/vue/24/outline'

import Logo from '@/components/common/Logo.vue'
import IconBars3 from '@/components/icons/IconBars3.vue'
import IconCalendar from '@/components/icons/IconCalendar.vue'
import IconXmark from '@/components/icons/IconXmark.vue'
import CommonButtons from '@/components/common/CommonButtons.vue'
import IconButtons from '@/components/common/IconButtons.vue'
import DialogComponent from '@/components/DialogComponent.vue'
import MenuDropdown from '@/components/MenuDropdown.vue'
import { useThemeStore } from '@/store/theme'
import { storeToRefs } from 'pinia'

const isOpenMenu = ref(false)
const isOpenBooking = ref(false)

function closeMenuModal() {
  isOpenMenu.value = false
}
function openMenuModal() {
  isOpenMenu.value = true
}
function closeBookingModal() {
  isOpenBooking.value = false
}
function openBookingModal() {
  isOpenBooking.value = true
}

const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六']

// 產生從今天起 14 天內的可預約日期
function buildDateOptions(days = 14) {
  const options = []
  const today = new Date()
  for (let i = 0; i < days; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    const value = date.toISOString().slice(0, 10)
    const label = `${date.getMonth() + 1}/${date.getDate()} (${WEEKDAYS[date.getDay()]})`
    options.push({ label, value })
  }
  return options
}

const peopleOptions = Array.from({ length: 6 }, (_, i) => ({
  label: `${i + 1} 位`,
  value: i + 1,
}))
const timeOptions = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30'].map((time) => ({
  label: time,
  value: time,
}))

const solutions = [
  { name: '人數', icon: UsersIcon, options: peopleOptions, errorKey: 'people' },
  { name: '日期', icon: CalendarIcon, options: buildDateOptions(), errorKey: 'date' },
  { name: '時間', icon: ClockIcon, options: timeOptions, errorKey: 'time' },
]

const selectedOptions = ref({
  人數: null,
  日期: null,
  時間: null,
})

const form = ref({ name: '', email: '', phone: '' })
const isSubmitting = ref(false)
const submitError = ref('')
const submitSuccess = ref(false)

const errors = ref({ people: '', date: '', time: '', name: '', email: '', phone: '' })

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^[\d+\-\s]{8,}$/

function validateForm() {
  const nextErrors = { people: '', date: '', time: '', name: '', email: '', phone: '' }

  if (!selectedOptions.value.人數) nextErrors.people = '請選擇人數'
  if (!selectedOptions.value.日期) nextErrors.date = '請選擇日期'
  if (!selectedOptions.value.時間) nextErrors.time = '請選擇時間'

  const name = form.value.name.trim()
  if (!name) nextErrors.name = '請輸入姓名'

  const email = form.value.email.trim()
  if (!email) {
    nextErrors.email = '請輸入電子信箱'
  } else if (!EMAIL_PATTERN.test(email)) {
    nextErrors.email = '信箱格式不正確，請確認是否包含 @ 及網域'
  }

  const phone = form.value.phone.trim()
  if (!phone) {
    nextErrors.phone = '請輸入電話'
  } else if (!PHONE_PATTERN.test(phone)) {
    nextErrors.phone = '電話格式不正確'
  }

  errors.value = nextErrors
  return Object.values(nextErrors).every((message) => !message)
}

watch(
  () => selectedOptions.value.人數,
  () => (errors.value.people = ''),
)
watch(
  () => selectedOptions.value.日期,
  () => (errors.value.date = ''),
)
watch(
  () => selectedOptions.value.時間,
  () => (errors.value.time = ''),
)
watch(
  () => form.value.name,
  () => (errors.value.name = ''),
)
watch(
  () => form.value.email,
  () => (errors.value.email = ''),
)
watch(
  () => form.value.phone,
  () => (errors.value.phone = ''),
)

function resetBookingForm() {
  form.value = { name: '', email: '', phone: '' }
  selectedOptions.value = { 人數: null, 日期: null, 時間: null }
  errors.value = { people: '', date: '', time: '', name: '', email: '', phone: '' }
}

async function submitBooking() {
  submitError.value = ''
  submitSuccess.value = false

  if (!validateForm()) return

  const { 人數, 日期, 時間 } = selectedOptions.value
  isSubmitting.value = true
  try {
    const response = await fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        phone: form.value.phone,
        people: 人數.value,
        date: 日期.value,
        time: 時間.value,
      }),
    })

    if (!response.ok) {
      const data = await response.json().catch(() => ({}))
      throw new Error(data.error || '送出失敗，請稍後再試')
    }

    submitSuccess.value = true
    resetBookingForm()
    setTimeout(() => {
      submitSuccess.value = false
      closeBookingModal()
    }, 3000)
  } catch (err) {
    submitError.value = err.message
  } finally {
    isSubmitting.value = false
  }
}

import defaultImage from '@/assets/images/default.jpg'
import menuImage from '@/assets/images/menu.jpg'
import pizzaImage from '@/assets/images/pizza.jpg'
import drinkImage from '@/assets/images/drink.jpg'
const currentImage = ref(defaultImage)
const currentImageAlt = ref('buddyhouse')

const changeImage = (type) => {
  switch (type) {
    case 'food':
      currentImage.value = menuImage
      currentImageAlt.value = 'menu'
      break
    case 'pizza':
      currentImage.value = pizzaImage
      currentImageAlt.value = 'pizza'
      break
    case 'drink':
      currentImage.value = drinkImage
      currentImageAlt.value = 'drink'
      break

    default:
      currentImage.value = defaultImage
      currentImageAlt.value = 'buddyhouse'
  }
}

const resetImage = () => {
  currentImage.value = defaultImage
  currentImageAlt.value = 'buddyhouse'
}

const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
  position: absolute;
  inset: 0;
}

.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition-delay: 0.1s;
}
</style>
