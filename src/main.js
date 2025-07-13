import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import VueGtag from 'vue-gtag-next'

// 在 createApp 之前還原 redirect 參數
const params = new URLSearchParams(window.location.search)
const redirect = params.get('redirect')
if (redirect) {
  window.history.replaceState(null, '', redirect)
}

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(
  VueGtag,
  {
    property: {
      id: 'G-1NX2J62EV1',
    },
  },
  router,
)

app.mount('#app')
