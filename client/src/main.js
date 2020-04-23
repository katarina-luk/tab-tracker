// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'
import {sync} from 'vuex-router-sync'
import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/dist/vuetify.min.css'
import store from '@/store/store'
// import HelloPage from '@/components/HelloPage'
import '@mdi/font/css/materialdesignicons.css'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from '@/components/globals/Panel'
import MyFooter from '@/components/Footer'
import MyHeader from '@/components/Header'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueI18n)
Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueYouTubeEmbed)

Vue.component('panel', Panel)
Vue.component('footer', MyFooter)
Vue.component('header', MyHeader)

sync(store, router)

// const routes = {'/': HelloPage}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  /* data: {currentRoute: window.location.pathname},
  computed: {
    ViewComponents () {
      return routes[this.currentRoute]
    }
  },
  render (h) { return h(this.ViewComponents) }, */
  Vuetify,
  router,
  store,
  components: { App }, /* , HelloPage */
  template: '<App/>'
})

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  }
})
