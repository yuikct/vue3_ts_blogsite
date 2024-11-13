import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/index.scss'
import 'element-plus/dist/index.css'
import 'layui/dist/css/layui.css';
import './utils/script.js' //开启禁止用户打开控制台

import ElementPlus from 'element-plus'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
