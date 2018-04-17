import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import {i18n} from './i18n'
import './config'

new Vue({
  router,
  store,
  i18n,
  el: '#app',
  render: h => h(App),
})
