import { App } from 'vue'
import * as $api from '@/services'

export default {
  install: (app: App) => {
    // Register component globally
    app.config.globalProperties.$api = () => $api
  },
}
