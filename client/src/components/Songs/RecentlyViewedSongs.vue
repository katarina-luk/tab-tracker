<template>
  <div>
    <panel title="Recently Viewed Songs">
      <template>
         <div>
         <b-table
        :fields="fields"
        :items="histories"
        id="my-table"
        :per-page="perPage"
         :current-page="currentPage">

      <template v-slot:items="props">
        {{ props.item.id }}
      </template>
      <template v-slot:items="props">
        {{ props.item.title }}
      </template>
      <template v-slot:items="props">
        {{props.item.artist }}
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="row"
      :per-page="perPage"
      aria-controls="my-table"
      align="center"
    ></b-pagination>
        </div>
      </template>
    </panel>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SongHistoryService from '@/services/SongHistoryService'
import MyHeader from '@/components/Header'
import MyFooter from '@/components/Footer'
export default {
  data () {
    return {
      perPage: 3,
      currentPage: 1,
      fields: ['id', 'title', 'artist'],
      histories: []
    }
  },
  components: {
    MyHeader,
    MyFooter
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ]),
    row () {
      return this.histories.length
    }
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.histories = (await SongHistoryService.index()).data
    }
  }
}
</script>

<style>
</style>
