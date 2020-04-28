<template>
    <panel title="Tab">
    <b-container fluid>
  <b-row>
    <b-col sm="10">
      <b-form-textarea
       id="textarea-plaintext"
        rows="3"
        max-rows="100"
        readonly
        v-model="song.tab"
        class="textareaa"
 ></b-form-textarea>
    </b-col>
  </b-row>
</b-container>
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

<style scoped>
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
 height: 600px;
 border-style: none;
 border-color: transparent;
 overflow: auto;
 padding: 40px;
}
</style>
