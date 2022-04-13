import { createApp } from 'vue'
import App from './App.vue'
import { store, key } from '../src/store/index'

import "./assets/scss/main.scss";

createApp(App).use(store, key).mount('#app')
