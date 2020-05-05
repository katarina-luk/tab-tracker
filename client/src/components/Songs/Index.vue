<template>
<div>
<my-header />
 <b-container class="bv-example-row">
    <b-row class="justify-content-md-center">
       <b-col col md="15" v-if="isUserLoggedIn">
      <songs-bookmarks />
       </b-col>
       <b-col col md="15" v-if="isUserLoggedIn">
      <recently-viewed-songs />
       </b-col>
    </b-row>

   <b-row :class="{
     xs12: !isUserLoggedIn,
       xs6: isUserLoggedIn
     }"></b-row>
 <b-row class="justify-content-md-center" > <b-col col md="20">  <songs-search-panel /></b-col></b-row>
 <b-row class="justify-content-md-center"><b-col col md="15">   <songs-panel /></b-col></b-row>

 </b-container>
<my-footer />
</div>
</template>

<script>

import {mapState} from 'vuex'
import SongsPanel from '@/components/Songs/SongsPanel'
import SongsSearchPanel from '@/components/Songs/SongsSearchPanel'
import SongsService from '@/services/SongsService'
import RecentlyViewedSongs from '@/components/Songs/RecentlyViewedSongs'
import Panel from '@/components/globals/Panel'
import SongsBookmarks from '@/components/Songs/SongsBookmarks'
import MyHeader from '@/components/Header'
import MyFooter from '@/components/Footer'
// import axios from 'axios'
export default {
  data () {
    return {
      songs: {}
    }
  },
  components: {
    Panel,
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    MyHeader,
    MyFooter,
    RecentlyViewedSongs

  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style lang="scss">
  //@import "../../../scss/components/_variables.scss";
  // @import "../../../scss/components/_global.scss";
@import "../../assets/style.scss";
 li {
    display: inline-block;
    border-radius: 2px;
    text-align: center;
    vertical-align: top;
    height: 30px;

    a {
      color: #444;
      display: inline-block;
      font-size: 1.2rem;
      padding: 0 10px;
      line-height: 30px;
    }

    &.active a { color: #fff; }

    &.active { background-color:rgb(117, 117, 224);}// color("materialize-red", "lighten-2"); }

    &.disabled a {
      cursor: default;
      color: #999;
    }

    i {
      font-size: 2rem;
    }
  }
  li.pages ul li {
    display: inline-block;
    float: none;
  }
.layout.column>.flex {
    margin-left: 0;
    margin-right: 0%;
}
.song{
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title{
  font-size: 30px;

}
.song-artist{
  font-size: 24px;

}
.song-genre{
  font-size: 18px;
}
.album-image{
  width: 70%;
  margin: 0 auto;
}
</style>
