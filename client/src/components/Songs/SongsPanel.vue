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
              <div v-if="songs">
                 <v-layout :start="pagination.range.from+1">
                   <v-flex xs10 v-for="song in paginate(songs)" v-bind:key="song">
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
                 </v-layout>
              </div>
              <p class="mt-5">
                Page {{currentPage}} out of {{pagination.totalPages}}
              </p>
                  <button @click="toPage(currentPage-1)" :disabled="currentPage == 1" >Previous page</button>
                    <nav>
                      <v-layout >
                        <v-flex xs10 v-for="page in pagination.totalPages" v-bind:key="page">
                  <button @click="toPage(page)">{{page}}</button>
                        </v-flex>
                      </v-layout>
                    </nav>
                  <button @click="toPage(currentPage+1)" :disabled="currentPage == pagination.totalPages">Next page</button>
            </div>
          </panel>
</template>

<script>
import {mapState} from 'vuex'
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
      // song: null,
      perPage: 3,
      currentPage: 1,
      pageLinksCount: 3
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'songs'
    ]),
    pagination () {
      if (this.songs) {
        // eslint-disable-next-line one-var
        let totalSongs = this.songs.length,
          // eslint-disable-next-line no-undef
          pageFrom = (this.currentPage * this.perPage) - this.perPage
        return {
          totalSongs: totalSongs,
          totalPages: Math.ceil(totalSongs / this.perPage),
          range: {
            from: pageFrom,
            to: pageFrom + this.perPage
          }
        }
      }
    }
  },
  methods: {
    toPage (page) {
      this.$router.push({
        query: Object.assign({}, this.$route.query, {
          page
        })
      })
      this.currentPage = page
    },
    paginate (list) {
      return list.slice(
        this.pagination.range.from,
        this.pagination.range.to
      )
    }
  },
  created () {
    if (this.$route.query.page) {
      this.currentPage = parseInt(this.$$route.query.page)
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
}

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
