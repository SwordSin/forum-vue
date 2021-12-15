import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/route/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/style/element-ui-reset.css'
import '@/style/css-var.css'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
