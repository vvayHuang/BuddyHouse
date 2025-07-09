import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 在 createApp 之前加入以下代碼
if (sessionStorage.redirect) {
  const redirect = sessionStorage.redirect
  delete sessionStorage.redirect
  router.push(redirect)
}

const app = createApp(App)

app.use(router)

app.mount('#app')
