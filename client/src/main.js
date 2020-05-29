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
import {library} from '@fortawesome/fontawesome-svg-core'
import {faPlay, faPause, faStepForward, faStepBackward, faTimes} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/dist/vuetify.min.css'
// import 'vuetify/dist/vuetify.min.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import store from '@/store/store'
import '@mdi/font/css/materialdesignicons.css'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Sound from 'vue-soundcloud-player'
import Panel from '@/components/globals/Panel'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import('../node_modules/vuetify/dist/vuetify')

library.add(faPlay, faPause, faStepForward, faStepBackward, faTimes, faGithub)
Vue.use(VueSweetalert2)
Vue.use(Howler)
Vue.use(Howl)
Vue.use(Sound)
Vue.use(FlagIcon)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueYouTubeEmbed)
Vue.use(VueAudio)
Vue.component('panel', Panel)
Vue.component('paginate', Paginate)
Vue.component('vue-audio', VueAudio)
Vue.component('font-awesome-icon', FontAwesomeIcon)
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
