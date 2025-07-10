import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref(localStorage.getItem('theme') || 'auto')

  function setTheme(mode) {
    theme.value = mode
    const root = document.documentElement
    if (mode === 'dark') {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else if (mode === 'light') {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      localStorage.removeItem('theme')
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    }
  }

  // 初始化
  setTheme(theme.value)

  // 監聽系統主題變化
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (theme.value === 'auto') setTheme('auto')
  })

  return { theme, setTheme }
})
