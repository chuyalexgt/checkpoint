import { createApp } from 'vue'
import { Loading, Quasar } from 'quasar'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

import '@quasar/extras/material-icons/material-icons.css'
import '@lottiefiles/lottie-player'
import 'quasar/src/css/index.sass'

const app = createApp(App)
app.use(Quasar, {
  plugins: {
    Loading,
  },
  config: {
    loading: { /* look at QuasarConfOptions from the API card */ },
  },
  boot: [
    // references /src/boot/<name>.js
    'index',
  ],
})
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(VueAxios, axios)

app.use(createPinia())
app.use(router)
app.mount('#app')
