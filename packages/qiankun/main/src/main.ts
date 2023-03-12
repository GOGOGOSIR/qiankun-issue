import './styles/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// fix: 与tailwindcss冲突
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

createApp(App)
  .use(router)
  .mount('#app')
