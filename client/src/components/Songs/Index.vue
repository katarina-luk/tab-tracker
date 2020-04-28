<template>
<div>
<my-header />
 <b-container class="bv-example-row">
    <b-row class="justify-content-md-center">
       <b-col col md="15" v-if="isUserLoggedIn">
      <songs-bookmarks />
       </b-col>
       <b-col col md="15" v-if="isUserLoggedIn">
      <recently-viewed-songs />
       </b-col>
    </b-row>

 <b-row class="justify-content-md-center">
   <b-row :class="{
     xs12: !isUserLoggedIn,
       xs6: isUserLoggedIn
     }">
 <b-row class="justify-content-md-center" > <b-col col lg="10">  <songs-search-panel /></b-col></b-row>
 <b-row class="justify-content-md-center"><b-col cols="10" md="auto">   <songs-panel /></b-col></b-row>
   </b-row>
 </b-row>

 </b-container>
 <my-footer />
</div>
</template>

<script>
import {mapState} from 'vuex'
import SongsPanel from '@/components/Songs/SongsPanel'
import SongsSearchPanel from '@/components/Songs/SongsSearchPanel'
import SongsService from '@/services/SongsService'
import RecentlyViewedSongs from '@/components/Songs/RecentlyViewedSongs'
import Panel from '@/components/globals/Panel'
import SongsBookmarks from '@/components/Songs/SongsBookmarks'
import MyHeader from '@/components/Header'
import MyFooter from '@/components/Footer'
export default {
  components: {
    Panel,
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    MyHeader,
    MyFooter,
    RecentlyViewedSongs

  },
  data () {
    return {
      songs: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }

}
</script>

<style scoped>
.layout.column>.flex {
    margin-left: 0;
    margin-right: 0%;
}
.song{
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title{
  font-size: 30px;

}
.song-artist{
  font-size: 24px;

}
.song-genre{
  font-size: 18px;
}
.album-image{
  width: 70%;
  margin: 0 auto;
}
</style>
