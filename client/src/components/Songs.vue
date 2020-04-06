/* eslint-disable vue/no-parsing-error */
<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
          <panel title='Songs'>
              <div v-for='song in songs' :key='song.title'>
                  {{song.title}} -
                  {{song.artist}} -
                  {{song.album}}
              </div>
          </panel>
  </v-flex>
</v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () { // do request to the backend
    this.songs = await SongsService.index()
  }

}
</script>

<style scoped>
.layout.column>.flex {
    margin-left: 0;
    margin-right: 0%;
}
</style>
