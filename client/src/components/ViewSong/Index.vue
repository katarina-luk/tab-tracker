<template>
  <div>
    <my-header />
<b-container>
  <b-row class="justify-content-md-center">
        <b-col col lg="6">
        <song-metadata :song="song" />
        </b-col>
 <b-col  col lg="6">
        <you-tube :youtubeId="song.youtubeId" />
       </b-col>
  </b-row>
    <b-row class="justify-content-md-center">

 <b-col col lg="12">
           <tab :song="song" />
 </b-col>
 <b-col col md="12">
        <lyrics :song="song" />
 </b-col>
   </b-row>
    </b-container>
      <my-footer/>
  </div>
</template>

<script>
import Tab from '@/components/ViewSong/Tab'
import Lyrics from '@/components/ViewSong/Lyrics'
import SongMetadata from '@/components/ViewSong/SongMetadata'
import YouTube from '@/components/ViewSong/YouTube'
import SongService from '@/services/SongsService'
import MyHeader from '@/components/Header'
import MyFooter from '@/components/Footer'
import Panel from '@/components/globals/Panel'
import SongHistoryService from '@/services/SongHistoryService'
import {mapState} from 'vuex'

export default {
  data () {
    return {
      song: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongService.show(songId)).data
    // console.log(this.song)
    if (this.isUserLoggedIn) {
      SongHistoryService.post({
        songId: songId
      })
    }
  },
  components: {
    Panel,
    SongMetadata,
    YouTube,
    Lyrics,
    Tab,
    MyHeader,
    MyFooter
  }
}
</script>

<style scoped>
.layout.column>.flex {
    margin-left: 0;
    margin-right: 0%;
}

/*
textarea {
  width: 100%;
 font-family: monospace;
 border: none;
 height: 600px;
 border-style: none;
 border-color: transparent;
 overflow: auto;
 padding: 40px;
}*/
</style>
