import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { router } from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fab)
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(far)
import { dom } from '@fortawesome/fontawesome-svg-core'
import { store } from './store/store'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

dom.watch()

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.config.productionTip = false

app.use(Toast)
library.add(fas, fab, faUserSecret)
app.component('fa-icon', FontAwesomeIcon)
app.use(vuetify)
app.use(store)
app.use(router)
app.mount('#app')
