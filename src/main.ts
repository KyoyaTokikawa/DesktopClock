import { createApp } from 'vue'
import App from './App.vue'
import { store, key } from '../src/store/index'

import "./assets/scss/base.scss";
import "./assets/scss/style/goldcity.scss";

createApp(App).use(store, key).mount('#app')
