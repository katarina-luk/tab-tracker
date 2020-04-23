<template>
  <div>
    <my-header />
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song" />
      </v-flex>

      <v-flex xs6 class="ml-2">
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>

    <v-layout class="mt-2">
      <v-flex xs6>
        <tab :song="song" />
      </v-flex>

      <v-flex xs6 class="ml-2">
        <lyrics :song="song" />
      </v-flex>
    </v-layout>
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

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongService.show(songId)).data
    // console.log(this.song)
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
