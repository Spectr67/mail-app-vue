import { createApp } from 'vue'
import { createBootstrap } from 'bootstrap-vue-next'
import App from './App3.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

// import 'materialize-css/dist/css/materialize.css'
// import 'materialize-css'
import 'material-icons'

// window.wm = createApp(App).mount('#app')
const app = createApp(App)
app.use(createBootstrap())
app.mount('#app')
