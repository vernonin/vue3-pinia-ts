import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import App from './App.vue'
import 'element-plus/dist/index.css'



createApp(App).use(ElementPlus).use(createPinia()).mount('#app')
