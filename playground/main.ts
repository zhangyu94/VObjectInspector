import { createApp } from 'vue'
import VObjectInspector from '../src'
import App from './App.vue'

const app = createApp(App)
app.use(VObjectInspector)
app.mount('#app')
