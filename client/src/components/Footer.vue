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
      Music is an art form, and cultural activity, whose medium is sound. General definitions of music include common elements such as pitch (which governs melody and harmony), rhythm (and its associated concepts tempo, meter, and articulation), dynamics (loudness and softness), and the sonic qualities of timbre and texture (which are sometimes termed the "color" of a musical sound). Different styles or types of music may emphasize, de-emphasize or omit some of these elements. Music is performed with a vast range of instruments and vocal techniques ranging from singing to rapping; there are solely instrumental pieces, solely vocal pieces (such as songs without instrumental accompaniment) and pieces that combine singing and instruments. The word derives from Greek μουσική (mousike; "art of the Muses").[1] See glossary of musical terminology.

In its most general form, the activities describing music as an art form or cultural activity include the creation of works of music (songs, tunes, symphonies, and so on), the criticism of music, the study of the history of music, and the aesthetic examination of music. Ancient Greek and Indian philosophers defined music in two parts: melodies, as tones ordered horizontally, and harmonies as tones ordered vertically. Common sayings such as "the harmony of the spheres" and "it is music to my ears" point to the notion that music is often ordered and pleasant to listen to. However, 20th-century composer John Cage thought that any sound can be music, saying, for example, "There is no noise, only sound." </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>MusicShutter</strong>
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
