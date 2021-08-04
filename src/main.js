import Vue from 'vue'
import App from './App'
import routes from './route/index'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.config.productionTip = false
const router = new VueRouter({
  routes // short for `routes: routes`
})
new Vue({
  router, 
  render: h => h(App)
}).$mount('#app')
