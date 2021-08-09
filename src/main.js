import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import routes from './route/index'
import VueRouter from 'vue-router'
import '@fortawesome/fontawesome-free'
import App from './App'
import './app.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueRouter);
Vue.config.productionTip = false
const router = new VueRouter({
  routes // short for `routes: routes`
})
new Vue({
  router, 
  render: h => h(App)
}).$mount('#app')
