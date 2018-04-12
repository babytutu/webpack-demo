import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import './config'

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
})
