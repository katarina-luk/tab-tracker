
<template>
  <panel title="Song Metadata">
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
           :to="{name: 'song-edit',
            params () {
              return {
                songId: song.id
              }
            }
          }">
              Edit
            </v-btn>

        <v-btn
          v-if="isUserLoggedIn && !bookmark"
          dark
          class="cyan"
          @click="setAsBookmark">
          Set As Bookmark
        </v-btn>

        <v-btn
          v-if="isUserLoggedIn && bookmark"
          dark
          class="cyan"
          @click="unsetAsBookmark">
          Unset As Bookmark
        </v-btn>
        <v-spacer></v-spacer>
         <v-btn
          v-if="song"
          dark
          class="cyan"
          @click="deleteSong">
          Delete
          </v-btn>
      </v-flex>

        <v-flex xs6>
            <img class="album-image" :src="song.albumImageUrl" /><br>
            {{song.album}}
        </v-flex>
      </v-layout>
    </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'
import SongsService from '@/services/SongsService'
export default {
  props: [
    'song'
  ],
  data () {
    return {
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  watch: {
    async song () {
      if (!this.isUserLoggedIn) {
        return
      }
      try {
        const bookmarks = (await BookmarksService.index({
          songId: this.song.id
        })).data
        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    async setAsBookmark () {
      try {
        this.bookmark = (await BookmarksService.post({
          songId: this.song.id// ,
          // userId: this.user.id
        })).data
        this.$swal({
          icon: 'success',
          title: 'Bookmark is setting',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (err) {
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
        console.log(err)
      }
    },
    async unsetAsBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
        this.$swal({
          icon: 'success',
          title: 'Bookmark is unsetting',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (err) {
        console.log(err)
        this.$swal({
          icon: 'success',
          title: 'Bookmark is unsetting',
          showConfirmButton: false,
          footer: 'You has already set the bookmark'
        })
      }
    },
    async deleteSong () {
      try {
        // const songId = this.$store.state.route.params.id
        await SongsService.delete(this.song.id)
        this.song = null
        this.$swal({
          icon: 'success',
          title: 'Song is deleted',
          showConfirmButton: false,
          timer: 1500
        })
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
