<template>
  <v-footer padless dark>
      <v-btn
              light
              small
              top
              absolute
              right
              middle
              fab
              :to="{name:'songs', hash:'#scroll'}">
              <v-icon >home</v-icon>
              </v-btn>

 <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>

    <!--<v-spacer></v-spacer>
    <div class="st">&copy; {{ text }}</div>
    <v-btn
              light
              top
              absolute
              right
              middle
              fab
              :to="{name:'songs', hash:'#scroll'}">
              <v-icon >home</v-icon>
              </v-btn> -->
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      padless: false,
      text: 'footer',
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    }
  }

}
</script>

<style scoped>
.home{
    cursor: pointer;
}
.home:hover{
    color: turquoise;
}
.st {
  background-color: #272727;
  width: 100%;
  height: 250px;
  color: white;
}
</style>
