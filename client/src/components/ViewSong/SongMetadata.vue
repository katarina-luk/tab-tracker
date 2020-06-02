
<template>
  <panel title="Song Metadata">
    <div class="words">
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
           class="cyan mb-2"
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
          Add to Favorites
        </v-btn>

        <v-btn
          v-if="isUserLoggedIn && bookmark"
          dark
          class="cyan"
          @click="unsetAsBookmark">
          Delete from Favorites
        </v-btn>
        <v-spacer></v-spacer>
         <v-btn
          v-if="song"
          dark
          class="cyan mt-2"
          @click="deleteSong"
          >
          Delete Song
          </v-btn>
      </v-flex>

        <v-flex xs6>
            <img class="album-image" :src="song.albumImageUrl" /><br>
            {{song.album}}
        </v-flex>
      </v-layout>
    </div>
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
          title: 'Song added to favorites',
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
          title: 'Song is removed from favourites',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (err) {
        console.log(err)
        this.$swal({
          icon: 'success',
          title: 'Song is removed from favourites',
          showConfirmButton: false,
          footer: 'You has already add the song'
        })
      }
    },
    async deleteSong () {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          try {
            SongsService.delete(this.song.id)
            this.song = null
            this.$swal(
              'Deleted!',
              'Song has been deleted.',
              'success'
            )
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
      )
    }
  }
}
</script>

<style lang="scss">
 // @import "../../assets/style.scss";
.words {
     color: white !important;

}
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
img> .album-image {
  max-width: 300px;
  min-width: 150px;
  margin: 0 auto;
}
.theme--dark.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    margin: 5px;
}
.v-btn:not(.v-btn--round).v-size--default {
    height: 35px;
    min-width: 50px;
    padding: 0 16px;
    margin: 5px;
}
</style>
