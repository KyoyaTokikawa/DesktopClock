import { createApp } from 'vue'
import App from './App.vue'
import { store, key } from '../src/store/index'

createApp(App).use(store, key).mount('#app')
