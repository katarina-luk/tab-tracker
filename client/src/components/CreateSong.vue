<template>
<div>
<my-header />
  <b-container>
   <b-row class="justify-content-lg-center">
     <b-col cols="20" md="auto"><panel title="Song Metadata">
             <div class="l-auth">
        <v-text-field
          label="Title"
          required
          :rules="[required]"
          v-model="song.title"
        ></v-text-field>

        <v-text-field
          label="Artist"
          required
          :rules="[required]"
          v-model="song.artist"
        ></v-text-field>

        <v-text-field
          label="Genre"
          required
          :rules="[required]"
          v-model="song.genre"
        ></v-text-field>

        <v-text-field
          label="Album"
          required
          :rules="[required]"
          v-model="song.album"
        ></v-text-field>

        <v-text-field
          label="Album Image Url"
          required
          :rules="[required]"
          v-model="song.albumImageUrl"
        ></v-text-field>

        <v-text-field
          label="YouTube ID"
          required
          :rules="[required]"
          v-model="song.youtubeId"
        ></v-text-field></div>
      </panel></b-col>
     <b-col col lg="6" >  <panel title="Song Structure" class="ml-2">
              <div class="l-auth">
        <!--v-text-field
          label="Tab"
          multi-line
          required
          :rules="[required]"
          v-model="song.tab"
        ></v-text-field-->

        <v-textarea
          label="Lyrics"
          multi-line
           name="input-7-4"
          required
          :rules="[required]"
          v-model="song.lyrics"
        ></v-textarea>
         <div class="danger-alert" v-if="error">
        {{error}}
      </div>

      <v-btn
        dark
        class="cyan"
        @click="create">
        Create Song
      </v-btn>
      </div>
      </panel>
    </b-col>
</b-row>
  </b-container>
    <my-footer/>
</div>
</template>

<script>
import Panel from '@/components/globals/Panel'
import SongService from '@/services/SongsService'
import MyHeader from '@/components/Header'
import MyFooter from '@/components/Footer'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  components: {
    Panel,
    MyHeader,
    MyFooter

  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return ''
      }
      try {
        await SongService.post(this.song)
        this.$swal({
          icon: 'success',
          title: 'Song was creating',
          timer: 1500,
          showConfirmButton: false
        })
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/style.scss";
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
    .theme--light.v-input, .theme--light.v-input input, .theme--light.v-input textarea {
    color: #29b6f6;
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
