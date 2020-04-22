<template>
    <panel title="Bookmarks">
<template>
  <div>
    <b-table  :fields="fields" :items="bookmarks"  id="my-table" :per-page="perPage"
      :current-page="currentPage">
      <template v-slot:items="props">
        {{ props.item.title }}
      </template>
      <template v-slot:items="props">
        {{props.item.artist }}
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      align="center"
    ></b-pagination>
  </div>
</template>

</panel>
</template>

<script>
import { mapState } from 'vuex'
import BookmarksService from '@/services/BookmarksService'
export default {
  data () {
    return {
      perPage: 3,
      currentPage: 1,
      fields: ['title', 'artist'],
      bookmarks: [
        /* { title: 'Song', artist: 'John Doe' },
        { title: 'Song', artist: 'Rubin' },
        { title: 'Song', artist: 'Shirley' } */
      ]
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ]),
    row () {
      return this.bookmarks.length
    }
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.bookmarks = (await BookmarksService.index()).data
    }
  }
}
</script>

<style>
</style>
