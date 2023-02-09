import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style.scss'
import 'normalize.css'
import axios from 'axios'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')
