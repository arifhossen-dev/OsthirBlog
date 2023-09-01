import { createApp } from 'vue'
import { createRouter,createWebHashHistory } from 'vue-router'
import axios from 'axios'
import './style.css'
import routes from './route/route'

import App from './App.vue'

const router = createRouter({
  history:createWebHashHistory(),
  routes,
})

createApp(App).use(router,axios).mount('#app')
