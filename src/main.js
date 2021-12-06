import '@babel/polyfill'
import Vue from 'vue'
import vuetify from './plugins/vuetify';
import App from './App.vue'
import router from './router'
import vueSmoothScroll from 'vue-smooth-scroll'

Vue.use(vueSmoothScroll)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
