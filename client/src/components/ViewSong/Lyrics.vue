<template>
    <panel title="Lyrics">
   <v-container fluid>
  <v-row>
    <v-col sm="10">
      <v-textarea
      class="l-auth textareaa"
         auto-grow
         solo
        readonly
        v-model="song.lyrics"
 ></v-textarea>
    </v-col>
  </v-row>
</v-container>
    </panel>
</template>

<script>
import Panel from '@/components/globals/Panel'
export default {
  props: [
    'song'
  ],
  components: {
    Panel
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
    max-width: 1150px;
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
.layout.column>.flex {
    margin-left: 0;
    margin-right: 0%;
}
.col-sm-10 {
    -ms-flex: 0 0 100%;
    -webkit-box-flex: 0;
    flex: 0 0 100%;
    max-width: 100%;
}
.textareaa {
  width: 100%;
 font-family: monospace;
 border: none;
 height: 400px;
 border-style: none;
 border-color: transparent;
 overflow: auto;
 padding: 40px;
}

</style>
