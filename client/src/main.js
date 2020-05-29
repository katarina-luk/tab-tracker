// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAudio from 'vue-audio'
import Vuetify from 'vuetify'
import {Howl, Howler} from 'howler'
import FlagIcon from 'vue-flag-icon'
import {sync} from 'vuex-router-sync'
import Paginate from 'vuejs-paginate'
import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/dist/vuetify.min.css'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default'
import {LayoutInstaller} from '@progress/kendo-layout-vue-wrapper'
// import 'vuetify/dist/vuetify.min.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import store from '@/store/store'
import '@mdi/font/css/materialdesignicons.css'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from '@/components/globals/Panel'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import('../node_modules/vuetify/dist/vuetify')

Vue.use(VueSweetalert2)
Vue.use(Howler)
Vue.use(Howl)
Vue.use(FlagIcon)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(LayoutInstaller)

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueYouTubeEmbed)
Vue.use(VueAudio)
Vue.component('panel', Panel)
Vue.component('paginate', Paginate)
Vue.component('vue-audio', VueAudio)
sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  /* data: {currentRoute: window.location.pathname}, */

  Vuetify,
  router,
  store,
  components: { App },
  template: '<App/>'
})

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  }
})
