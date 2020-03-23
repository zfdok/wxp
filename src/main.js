import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import 'vant/lib/index.css';
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://127.0.0.1/'
axios.interceptors.request.use(config => { // 拦截请求
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

Vue.prototype.$http = axios // 把$http当作axios


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
