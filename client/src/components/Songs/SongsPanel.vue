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
            <div class="l-auth">
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
      songs: null,
      song: null
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
}/*,
  methods: {
    async deleteSong () {
      try {
        const songId = this.$store.state.route.params.id
        await SongsService.delete(songId)
        this.songId = null
      } catch (err) {
        console.log(err)
      }
    }
  }
}
,
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = await SongService.delete(songId)
    this.song=null
    // console.log(this.song)
  }
  */

</script>

<style lang="scss">
  @import "../../assets/style.scss";
.l-auth {
   color: $border-color-input !important;
    background-color: $background-color;
    padding: 15px;
    margin: 45px auto;
    min-width: 320px;
    max-width: 620px;
    animation: bounceIn 1s forwards ease;
      label, input, .icon {
      color: #29b6f6!important;
    }
    .input-group__details {
      &:before {
        background-color: $border-color-input !important;
      }
    }
  }

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
