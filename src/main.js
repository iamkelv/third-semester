import { createApp } from 'vue'
import App from './App.vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaFlag, RiZhihuFill } from 'oh-vue-icons/icons'
addIcons(FaFlag, RiZhihuFill)
import './index.css'
import { store } from './store/store'

const app = createApp(App)
app.component('v-icon', OhVueIcon)

app.use(store)

app.mount('#app')
