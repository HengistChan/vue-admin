import Vue from 'vue'

import './styles/index.scss'

import {Storage} from "./utils/storage";  //localstorage

import ViewUI from 'view-design';   //view ui

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$Storage = Storage;

Vue.use(ViewUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
