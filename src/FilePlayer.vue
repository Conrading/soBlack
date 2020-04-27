<template>
  <div class="container">
    <div :style="{backgroundImage: `url(${lightimage})`}"> <!--upload image here-->
      <div class="mt-3 playerMainFrame">
        <ul id="autoplayers">  
          <!--This is video player for two column-->
          <b-row class="justify-content-md-center">
            <b-col>
              <li v-for="(video, index) in videoArray" :key='(video, index)'>
                <video 
                v-if=" index % 2 == 0 "
                ref="videoPlayerL" 
                @click="stopPlay"
                class="video-js vjs-custom-skin vjs-16-9"
                controls autoplay loop preload="auto"
                data-setup='{}'>
                  <source v-bind:src="require(`./storage/${video}`)" type="video/mp4">
                </video>
              </li>
            </b-col>
            <b-col>
              <li v-for="(video, index) in videoArray" :key='(video, index)'>
                <video 
                v-if=" (index+1) % 2 == 0 "
                ref="videoPlayerR" 
                @click="stopPlay"
                class="video-js vjs-custom-skin vjs-16-9"
                controls autoplay loop preload="auto"
                data-setup='{}'>
                  <source v-bind:src="require(`./storage/${video}`)" type="video/mp4">
                </video>
              </li>
            </b-col>
          </b-row>
          <!--This is audio player for two column-->
          <b-row>
            <b-col>
              <li v-for="audio in audioArray" :key='audio'>
                <audio 
                id="trackSound"
                ref="trackSound"
                controls autoplay preload="auto">
                  <source v-bind:src="require(`./storage/${audio}`)">
                </audio>
              </li>
            </b-col>
          </b-row>
        </ul>
      </div>
    <!--old player is here /-->
      <!--b-row class="justify-content-md-center">
        <b-col>
          <video id="videoPlayer01" ref="videoPlayer01" class="video-js vjs-default-skin vjs-16-9" controls autoplay preload="auto" data-setup="{}">
            <source src="./storage/Drums_Beat.mp4" type="video/mp4">
          </video>   
        </b-col>
      </b-row-->
    <!--control button /-->
        <div>
            <b-row class="justify-content-md-center">
          <label class="font-weight-bold text-white" for="generalPlay">
            Play All Together
          </label>
            </b-row>
            <b-row class="justify-content-md-center">
          <b-button @click="generalPlay" :pressed.sync="playStatus" variant="outline-light">Play All</b-button>
          <b-button @click="stopPlay" :pressed.sync="playStatus" variant="outline-light">Stop All</b-button>
            </b-row>
            <b-row class="mt-2 justify-content-md-center">
              <p class="text-white">Status: <strong class="text-white">{{ playStatus }}</strong></p>
            </b-row>
        </div>
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
import storageList from './storage/storageList' //database information input

import lightimage from './storage/2.jpg' //background image

//import axios from 'axios'
//Vue.use(axios)

export default {
  name: 'just-player',
  components: {
    //PlayerParameter
  },
  data () {
    return {
        lightimage, //image parameter
        videoArray: [],
        audioArray: [],
        picArray:[],
        playStatus: null,
        soun01Storage: [],//startTime, soundVolume, durationTime
    }
  },
  created () {
    //here we load the filename within storageList onto dbArray
    let count = storageList.length;
    while (count--) {
      if(storageList[count].type == "video") {
        this.videoArray.push(storageList[count].filename);
      }
    }
    while (count--) {
      if(storageList[count].type == "audio") {
        this.audioArray.push(storageList[count].filename);
      }
    }
  },
  mounted () {

  },
  methods: {
      generalPlay() {
        let i = storageList.length;
        while (i--) {
          const videoDisplay = this.$refs.videoPlayer;
          videojs(videoDisplay, 
            {controlBar: true}, 
            () => {
              videoDisplay.currentTime = storageList[i].startPlay, 
              videoDisplay.volume = storageList[i].volume
              }).play();
        }
        //playing sound
        var sound01Track = document.getElementById("trackSound01");
        sound01Track.play(sound01Track.currentTime = this.soun01Storage[0], sound01Track.volume = this.soun01Storage[1]);
        //somehow document.getElementById does not work for video here
        this.playStatus = "it is playing now";
      },
      stopPlay () {
        const videoDisplayL = this.$refs.videoPlayerL;
        videojs(videoDisplayL, {controlBar: true}).pause();
        const videoDisplayR = this.$refs.videoPlayerR;
        videojs(videoDisplayR, {controlBar: true}).pause();
        //var sound01Track = document.getElementById("trackSound01");
        //sound01Track.pause();
        this.playStatus = "stop as you request";
      },
  }
}
</script>
