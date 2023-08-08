import '@/assets/main.css'
import "vue-progressive-image/dist/style.css";
import VueProgressiveImage  from "vue-progressive-image";
import { createApp } from 'vue'
import pinia from "@/stores/store.js";
import App from '@/App.vue'
import router from '@/router'
import YmapPlugin from "vue-yandex-maps";
import { settings } from './shared/constant';
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(YmapPlugin, settings)
app.use(VueProgressiveImage)
app.mount('#app')
