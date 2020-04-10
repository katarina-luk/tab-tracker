<template>

          <panel title='Songs'>
            <v-btn
            slot="action"
            :to="{name: 'songs-create'}"
              light
              medium
              absolute
              right
              middle
              fab>
              <v-icon>add</v-icon>
              </v-btn>
              <div v-for='song in songs'
              class="song"
                 :key='song.id'>
                 <v-layout>
                   <v-flex xs6>
                     <div class="song-title">
                       {{song.title}}
                     </div>
                      <div class="song-artist">
                       {{song.artist}}
                     </div>
                      <div class="song-genre">
                       {{song.genre}}
                     </div>
                      <v-btn
                     dark
                       class="cyan"
                       :to="{name: 'song', params: {songId: song.id}}">
                         View
                      </v-btn>
                   </v-flex>

                    <v-flex xs6>
                      <img class="album-image" :src="song.albumImageUrl" />
                   </v-flex>
                 </v-layout>
              </div>
          </panel>
</template>

<script>
import SongsPanel from '@/components/Songs/SongsPanel'
import SongsService from '@/services/SongsService'
import Panel from '@/components/globals/Panel'
export default {
  components: {
    Panel,
    SongsPanel
  },
  data () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
  /*,
  async mounted () {
    this.songs = (await SongsService.index()).data
  } */

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
