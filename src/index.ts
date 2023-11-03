import type { App } from 'vue'
import VObjectInspector from './VObjectInspector.vue'

export default {
  install: (app: App) => {
    app.component('VObjectInspector', VObjectInspector)
  },
}

export { VObjectInspector }
