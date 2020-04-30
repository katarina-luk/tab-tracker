<template>
  <div>
    <panel title="Recently Viewed Songs">
       <div class="l-auth">
      <template>
        <div>
         <b-table
        :fields="fields"
        :items="histories"
        id="my-table"
        :per-page="perPage"
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
      :total-rows="row"
      :per-page="perPage"
      aria-controls="my-table"
      align="center"
    ></b-pagination>
        </div>
      </template>
       </div>
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
      fields: ['title', 'artist'],
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

<style lang="scss">
  @import "../../assets/style.scss";
.l-auth {
   color: $border-color-input !important;
    background-color: $background-color;
    padding: 15px;
    margin: 45px auto;
    min-width: 320px;
    max-width: 420px;
    animation: bounceIn 1s forwards ease;
      label, input, .icon {
      color: #29b6f6!important;
    }
    .input-group__details {
      &:before {
        background-color: $border-color-input !important;
      }
    }
     .table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
    color: $border-color-input !important;
}
.table th{
   color: $border-color-input !important;
}
  }

</style>
