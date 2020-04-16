<template>
<v-layout column>
  <v-flex>
    <div class="white elevation-2">
      <v-toolbar  dense dark >
        <v-toolbar-title >{{title}}</v-toolbar-title>
        <slot name='action' />
      </v-toolbar>
      <br>
      <slot>No slot content defined.</slot>
    <br>
    </div>
  </v-flex>
</v-layout>

</template>

<script>
export default {
  props: [
    'title'
  ]

}
</script>

<style scoped>

element.style {
    justify-content: center;
    margin-right: 0;
    margin-left: 0;
    padding: 0;
}
.layout.column>.flex {
    margin-left: 0;
    margin-right: 0%;
}

</style>
