<template>
  <div class="container">

    <!--test auto adding player-->
    <!--div class="videoRunner">
      <ul id="autoplayers">
        <comment: adding index in v-for to show video side by side>
        <li v-for="item in sourceStorage" :key='item'>
          <video 
          v-if='item === "videoSource"' 
          ref="videoPlayer" 
          class="video-js vjs-default-skin vjs-16-9"
          controls autoplay loop preload="auto"
          data-setup='{}'>
            <source :src="sourceFolder" type="video/mp4">
          </video>
          <audio 
          v-else-if='item === "audioSource" '
          id="trackSound"
          ref="trackSound"
          controls autoplay preload="auto">
            <source :src="sourceFolder">
          </audio>
        </li>
      </ul>
    </div-->
    
    <!--player is here /-->
    <div class="videoRunner">
      <b-row class="justify-content-md-center">
        <b-col>
          <video id="videoPlayer01" ref="videoPlayer01" class="video-js vjs-default-skin vjs-16-9" controls autoplay preload="auto" data-setup="{}">
            <source src="./storage/Drums_Beat.mp4" type="video/mp4">
          </video>   
        </b-col>
        <b-col>
          <video id="videoPlayer02" ref="videoPlayer02" class="video-js vjs-default-skin vjs-16-9" controls autoplay preload="auto" data-setup="{}">
            <source src="./storage/star_war.mp4" type="video/mp4">
          </video>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center mt-2">
        <b-col>
          <video id="videoPlayer03" ref="videoPlayer03" class="video-js vjs-default-skin vjs-16-9" controls autoplay preload="auto" data-setup="{}">
            <source src="./storage/rap.mp4" type="video/mp4">
          </video>   
        </b-col>
        <b-col>
          <video id="videoPlayer04" ref="videoPlayer04" class="video-js vjs-default-skin vjs-16-9" controls autoplay preload="auto" data-setup="{}">
            <source src="./storage/deeplove.mp4" type="video/mp4">
          </video>
        </b-col>
      </b-row>
    </div>

    <div class="soundRunner">
      <audio id="trackSound01" ref="trackSound01" controls autoplay preload="auto">
        <!--source src="./components/sound01.mp3"-->
      </audio>
    </div>
    <!--control button /-->
        <div>
            <b-row class="justify-content-md-center">
          <label for="generalPlay">
            Play All Together
          </label>
            </b-row>
            <b-row class="justify-content-md-center">
          <b-button @click="generalPlay" :pressed.sync="playStatus" variant="outline-primary">Play All</b-button>
          <b-button @click="stopPlay" :pressed.sync="playStatus" variant="outline-primary">Stop All</b-button>
            </b-row>
            <b-row class="mt-2 justify-content-md-center">
              <p>Status: <strong>{{ playStatus }}</strong></p>
            </b-row>
        </div> 
  </div>
</template>

<script>
import videojs from 'video.js'
import 'videojs-contrib-hls'

import Vue from 'vue'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
Vue.use(BootstrapVue, BootstrapVueIcons)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//import axios from 'axios'
//Vue.use(axios)

export default {
  name: 'just-player',
  components: {
    //PlayerParameter
  },
  data () {
    return {
        playStatus: null,
        soun01Storage: [0, 0.5, 0],//startTime, soundVolume, durationTime
    }
  },
  methods: {
      generalPlay() {
        //playing sound
        var sound01Track = document.getElementById("trackSound01");
        sound01Track.play(sound01Track.currentTime = this.soun01Storage[0], sound01Track.volume = this.soun01Storage[1]);
        //somehow document.getElementById does not work for video here
        const videoDisplay01 = this.$refs.videoPlayer01;
        const videoDisplay02 = this.$refs.videoPlayer02;
        const videoDisplay03 = this.$refs.videoPlayer03;
        const videoDisplay04 = this.$refs.videoPlayer04;
        videojs(videoDisplay01, {controlBar: true}, () => {videoDisplay01.currentTime = 5, videoDisplay01.volume = 0.2}).play();
        videojs(videoDisplay02, {controlBar: true}, () => {videoDisplay02.currentTime = 0, videoDisplay02.volume = 0.1}).play();
        videojs(videoDisplay03, {controlBar: true}, () => {videoDisplay03.currentTime = 10.5, videoDisplay03.volume = 0.3}).play();
        videojs(videoDisplay04, {controlBar: true}, () => {videoDisplay04.currentTime = 3.7, videoDisplay04.volume = 0.3}).play();
        this.playStatus = "it is playing now";
      },
      stopPlay () {
        var sound01Track = document.getElementById("trackSound01");
        const videoDisplay01 = this.$refs.videoPlayer01;
        const videoDisplay02 = this.$refs.videoPlayer02;
        const videoDisplay03 = this.$refs.videoPlayer03;
        const videoDisplay04 = this.$refs.videoPlayer04;
        videojs(videoDisplay01).pause();
        videojs(videoDisplay02).pause();
        videojs(videoDisplay03).pause();
        videojs(videoDisplay04).pause();
        sound01Track.pause();
        this.playStatus = "stop as you request";
      },
  }
}
</script>
