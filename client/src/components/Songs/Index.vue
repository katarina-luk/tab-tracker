<template>
  <v-layout>
   <v-flex xs6>
    <songs-search-panel />
    <songs-panel />
   </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from '@/components/Songs/SongsPanel'
import SongsSearchPanel from '@/components/Songs/SongsSearchPanel'
import SongsService from '@/services/SongsService'
import Panel from '@/components/globals/Panel'
export default {
  components: {
    Panel,
    SongsPanel,
    SongsSearchPanel
  },
  data () {
    return {
      songs: null
    }
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
