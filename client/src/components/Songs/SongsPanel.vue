/* eslint-disable no-undef */
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
    <div class="l">
      <v-container justify-center >
        <div v-if="songs" class="song" >
                <v-layout :start="pagination.range.from+1" wrap >
                   <div v-for="song in paginate(songs)" v-bind:key="song">
                     <v-row>
                     <v-col col-6 col-md-4 > <img class="album-image" :src="song.albumImageUrl"/></v-col>
                        <v-col col-6 col-md-4 >
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
                            class="cyan mt-2"
                            :to="{name: 'song', params: {songId: song.id}}">
                            View
                            </v-btn>
                        </v-col>
                      </v-row>
                   </div>
                 </v-layout>
          </div>
          <div class="mt-2" style="font-family: 'Lobster', Georgia, Times, serif;">
            Products per page:
              <select v-model="perPage">
                <option>1</option>
                <option>3</option>
                <option>6</option>
              </select>
          </div>
      </v-container>

    </div>
     <div class="l-a">
    <p class="mt-3 " style="text-align: center;  font-family: 'Lobster', Georgia, Times, serif;" >
                Page {{currentPage}} out of {{pagination.totalPages}}
              </p>
               <v-container justify-center class="d-inline-flex pa-2" style="justify-content: center;">
              <v-btn @click="toPage(currentPage-1)" :disabled="currentPage == 1" small class="mr-2" >Previous page</v-btn>
                <nav>
                  <v-layout >
                    <v-flex xs10 v-for="page in pagination.totalPages" v-bind:key="page">
                      <button @click="toPage(page)" class="m-1">{{page}}</button>
                    </v-flex>
                  </v-layout>
                </nav>
              <v-btn @click="toPage(currentPage+1)" :disabled="currentPage == pagination.totalPages" small class="ml-2">Next page</v-btn>
      </v-container>
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
    } /* ,
    pageLinks () {
      if (this.songs.length) {
        // eslint-disable-next-line one-var
        let negativePoint = parseInt(this.currentPage) - this.pageLinksCount,
          positivePoint = parseInt(this.currentPage) + this.pageLinksCount
        // eslint-disable-next-line no-undef
        pages = []
        if (negativePoint < 1) {
          negativePoint = 1
        }

        if (positivePoint > this.pagination.totalPages) {
          positivePoint = this.pagination.totalPages
        }

        for (let i = negativePoint; i <= positivePoint; i++) {
          // eslint-disable-next-line no-undef
          pages = push(i)
        }

        // eslint-disable-next-line no-undef
        return pages
      }
    } */
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
      this.currentPage = parseInt(this.$route.query.page)
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    },
    '$route' (to) {
      this.currentPage = parseInt(to.query.page) || 1
    },
    perPage () {
      if (this.currentPage > this.pagination.totalPages) {
        this.$router.push({
          query: Object.assign({}, this.$route.query, {
            page: this.pagination.totalPages
          })
        })
      }
    }
  }
}

</script>

<style lang="scss">
  @import "../../assets/style.scss";
.l {
   color: $border-color-input !important;
    background-color: $background-color;
    padding: 15px;
    margin: 45px auto;
    min-width: 320px;
    max-width: 820px;
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
  .l-a{
     color: $border-color-input !important;
    background-color: $background-color;
    padding: 15px;
    margin: 45px auto;
    min-width: 320px;
    max-width: 820px;
    animation: bounceIn 1s forwards ease;
  }

.layout.column>.flex {
    margin-left: 0;
    margin-right: 0%;
}
.song{
  padding: 20px;
  height: 330px;
  width: 100%;
  overflow: scroll;
  max-height:100%;
  min-height: 100% ;
}

.song-title{
  font-size: 30px;
  font-family: 'Lobster', Georgia, Times, serif;

}
.song-artist{
  font-size: 24px;
  font-family: 'Lobster', Georgia, Times, serif;

}
.song-genre{
  font-size: 18px;
  font-family: 'Lobster', Georgia, Times, serif;
}
.album-image{
  width: 100%;
  margin: 0 auto;
}
</style>
