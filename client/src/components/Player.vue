
<template>
<div>
    <my-header />
  <div id="appp">
    <main>
      <section class="player">
        <div class="cover-wrapper">
          <img v-bind:class="coverObject" :src="current.cover" />
        </div>
        <div class="song-details">
          <h2 class="song-title">
            {{ current.title }}
          </h2>
          <p class="artist">{{ current.artist }}</p>
          <KProgress
            :show-text="false"
            class="progress-bar-wrapper"
            v-bind:percent="current.percent"
            :color="['#df83f1', '#82279f', '#53cfe0']"
          />
          <div class="timer">
            <p class="start">{{ currentlyTimer }}</p>
            <p class="end">
              {{ current.totalTimer }}
            </p>
          </div>
        </div>
        <div class="controls">
          <button class="prev" @click="prev" v-if="songs.length > 1">
            <font-awesome-icon icon="step-backward" />
          </button>
          <button class="play" v-if="!isPlaying" @click="play">
            <font-awesome-icon icon="play" />
          </button>
          <button class="pause" v-else @click="pause">
            <font-awesome-icon icon="pause" />
          </button>
          <button class="next" @click="next" v-if="songs.length > 1">
            <font-awesome-icon icon="step-forward" />
          </button>
        </div>
      </section>
    </main>
    <section class="playlist">
      <h3>Now Playing <span> 🎵 </span></h3>
      <ul>
        <li v-for="song in songs" :key="song.src" class="song">
          <div class="cover-playlist">
            <img class="cover" :src="song.cover" />
          </div>
          <div class="details" @click="play(song)">
            <h2 class="song-title">
              {{ song.title }}
            </h2>
            <p class="artist">{{ song.artist }}</p>
            <KProgress
              v-if="song.isPlaying"
              :color="['#df83f1', '#82279f', '#53cfe0']"
              :show-text="false"
              class="progress-bar-wrapper"
              v-bind:percent="song.percent"
            />
          </div>
          <div class="actions">
            <!--button @click="removeSongFromPlaylist(song)" class="delete">
              <font-awesome-icon icon="times" />
            </button-->
          </div>
        </li>
      </ul>
    </section>
  </div>
<my-footer/>
</div>
</template>

<script>
import MyHeader from '@/components/Header'
import MyFooter from '@/components/Footer'
import KProgress from 'k-progress'
import { formatTimer } from '../helpers/timer'
import { deleteElement, threatSongs, shuffleArray } from '../helpers/utils'
import songs from '../mocks/songs'
export default {
  components: { KProgress, MyHeader, MyFooter },
  name: 'App',
  data () {
    return {
      current: {},
      coverObject: { cover: true, animated: false },
      index: 0,
      isPlaying: false,
      currentlyTimer: '00:00',
      songs: shuffleArray(songs),
      player: new Audio()
    }
  },
  methods: {
    listenersWhenPlay () {
      this.player.addEventListener('timeupdate', () => {
        var playerTimer = this.player.currentTime
        this.currentlyTimer = formatTimer(playerTimer)
        this.current.percent = (playerTimer * 100) / this.current.seconds
        this.current.isPlaying = true
      })
      this.player.addEventListener(
        'ended',
        function () {
          this.next()
        }.bind(this)
      )
    },
    setCover () {
      this.coverObject.animated = true
      setTimeout(() => {
        this.coverObject.animated = false
      }, 1000)
    },
    setCurrentSong () {
      this.current = this.songs[this.index]
      this.play(this.current)
      this.setCover()
    },
    play (song) {
      if (typeof song.src !== 'undefined') {
        this.current.isPlaying = false
        this.index = this.songs.indexOf(this.current)
        this.current = song
        this.player.src = this.current.src
      }
      this.player.play()
      this.isPlaying = true
      this.setCover()
      this.listenersWhenPlay()
    },
    pause () {
      this.player.pause()
      this.isPlaying = false
    },
    next () {
      this.current.isPlaying = false
      this.index = this.songs.indexOf(this.current)
      this.index++
      if (this.index > this.songs.length - 1) {
        this.index = 0
      }
      this.setCurrentSong()
    },
    prev () {
      this.current.isPlaying = false
      this.index = this.songs.indexOf(this.current)
      this.index--
      if (this.index < 0) {
        this.index = this.songs.length - 1
      }
      this.setCurrentSong()
    },
    removeSongFromPlaylist (song) {
      if (this.songs.length > 1) {
        if (this.index > 0) {
          this.index--
        }
        this.current.isPlaying = false
        this.songs = deleteElement(this.songs, song)
        this.setCurrentSong()
      }
    }
  },
  mounted () {
    this.songs = threatSongs(this.songs)
    this.current = this.songs[this.index]
    this.player.src = this.current.src
  }
}
</script>

<style >
@import "../assets/styles/animations.css";
@import "../assets/styles/fonts.css";

* {
  box-sizing: border-box;
  user-select: none;
  overflow-wrap: break-word;
  margin: 0px;
  padding: 0px;
}

ul {
  list-style: none;
}
li {
 overflow: hidden;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
  justify-content: center;
  background: url("https://images7.alphacoders.com/717/717773.jpg") no-repeat
  center center fixed;
  animation: gradient 15s ease infinite;
  -webkit-font-smoothing: antialiased;
}

main {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  max-width: 375px;
  max-height: 623px;
  margin: 0 auto;
  padding: 25px;
  color: rgb(55, 182, 233);
  background-color:rgba(0, 0, 0, .5);
  border-radius: 15px;
  animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

button {
  appearance: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
  transform: scale(1.1);
}

.song-details {
  margin-top: 25px;
}

.cover-playlist {
  height: 50px;
  width: 50px;
}

.cover-wrapper {
  width: 100%;
  margin-top: 30px;
  height: 270px;
  text-align: center;
}

.animated {
  animation: appear-smoothly 1s normal both;
  transition: all 0.3s;
}

.cover {
  height: 100%;
  width: 270px;
  box-shadow: 0 24px 35px -16px rgba(107, 179, 237, 0.5);
  border-radius: 5px;
}

.cover-playlist > .cover {
  margin-right: 15px;
  width: 50px;
}

.song-title {
  width: 100%;
  color:rgb(55, 182, 233);
  font-size: 1.13em;
  text-align: center;
  margin-bottom: 5px;
}

.artist {
  font-family: Muli;
  width: 100%;
  font-weight: 400;
  text-align: center;
}

.details {
  margin-left: 10px;
  width: 100%;
}

.details > .song-title {
  color: rgb(55, 182, 233);
  font-size: inherit;
  text-align: left;
}

.details > .artist {
  color: rgb(55, 182, 233);
  text-align: left;
}

.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 15px;
}

.play,
.pause {
  background-image: linear-gradient(
    to right top,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
  border-radius: 50%;
  width: 80px;
  height: 80px;
  justify-content: center;
  box-shadow: -1px 17px 24px -6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-size: 25px;
  color: #fff;
  margin-left: 20px;
  margin-right: 20px;
}

.next,
.prev {
  border: 0;
  border-radius: 50%;
  font-size: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.26);
  color: #fff;
  transition: background-color 0.2s;
  position: relative;
}

.playlist {
  background-color:rgba(0, 0, 0, .5);
  overflow-y: auto;
  max-height: 230px;
  border-radius: 5px;
  animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

.playlist h3 {
  color: rgb(55, 182, 233);
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}

.playlist .song {
  color: rgb(55, 182, 233);
  display: flex;
  padding: 10px;
  overflow: hidden;
  height: 100px;

}

.actions > .delete {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  justify-content: center;
  box-shadow: -1px 17px 24px -6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-size: 20px;
  color: #ba83ca;
}

.playlist .song:hover {
  background-color: #ededed98;
  transition: box-shadow 0.2s, background-color 0.3s;
}
.timer {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px;
}

.k-progress-outer {
  margin-top: 15px !important;
  padding-right: 0 !important;
}

#appp {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
}

@media (max-width: 768px) {
  #appp {
    grid-template-columns: 1fr;
  }

  body {
    height: 100%;
  }

  .playlist {
    max-height: 200px;
  }
}

</style>
