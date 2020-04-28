import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs/Index'
import ViewSong from '@/components/ViewSong/Index'
import CreateSong from '@/components/CreateSong'
import EditSong from '@/components/EditSong'
import HelloPage from '@/components/HelloPage'
import Carousel from '@/components/ViewSong/Carousel.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: ViewSong
    },
    {
      path: '/songs/:songId/edit',
      name: 'song-edit',
      component: EditSong
    },
    {
      path: '/',
      name: 'hello',
      component: HelloPage
    },
    {
      path: '*',
      redirect: 'songs'
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: Carousel
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (from.hash) {
      return {selector: from.hash}
    }
    return {
      x: 0,
      y: 0
    }
  }

})
