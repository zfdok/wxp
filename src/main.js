import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import 'vant/lib/index.css';
import axios from 'axios'
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5e7797f3048b0c4cff679a53/wxp'
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
