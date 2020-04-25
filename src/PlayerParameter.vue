<template>
  <div class="container">    
    <!--div class="videoRunner">
      <b-row class="justify-content-md-center">
        <b-col>
          <video id="videoPlayer01" ref="videoPlayer01" class="video-js vjs-default-skin vjs-16-9" controls autoplay preload="auto" data-setup="{}">
            <source src="./components/video.01.mov" type="video/mov">
          </video>   
        </b-col>
        <b-col>
          <video id="videoPlayer02" ref="videoPlayer02" class="video-js vjs-default-skin vjs-16-9" controls autoplay preload="auto" data-setup="{}">
            <source src="./components/video.02.mp4" type="video/mp4">
          </video>
        </b-col>
      </b-row>
    </div>

    <div class="soundRunner">
      <audio id="trackSound01" ref="trackSound01" controls autoplay preload="auto">
        <source src="./components/sound01.mp3">
      </audio>
    </div-->

    <b-container class="mt-5">
        <!--div>
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
        </div--> 
        <div :style="{backgroundImage: `url(${lightimage})`}"> <!--upload image here-->
              <b-row class="justify-content-md-center">
          <label class="text-white" for="parameterSetting">
            ---- Choose the File you want to set ----
          </label>
              </b-row>
              <ul id="autobutton">
                <b-row align-h="center">
                  <li v-for="name in dbArray" :key='name'>
                    <b-col><b-button id="selectbutton" @click="selectbutton" size="sm" pill variant="outline-light">{{ name }}</b-button></b-col>
                  </li>
                </b-row>
              </ul>
              <b-row class="justify-content-md-center">
          <!--b-button id="leftVideo" @click="leftVideo" :pressed.sync="leftVideobutton" pill variant="outline-success">Left Video</b-button>
          <b-button id="rightVideo" @click="rightVideo" :pressed.sync="rightVideobutton" pill variant="outline-success">Right Video</b-button>
          <b-button id="sound01" @click="sound01" :pressed.sync="sound01button" pill variant="outline-secondary">First Sound</b-button-->
              </b-row>
        </div>

        <div class="mt-4">
            <b-row align-h="center">
                <b-col align-h="end" align-self="center" lg="1.5">Start playing at </b-col>
                <b-col md="1"><b-form-input id="startTime" v-model="startTime"/></b-col>
                <b-col align-h="start" align-self="center" lg="0.8">seconds</b-col>
            </b-row>
        </div>
        <div class="my-4">
            <b-row align-h="center">
                <b-col align-self="center" md="2">Input Volume</b-col>
                <b-col md="3">
                  <form class="range-field w-75">
                  <input id="soundVolume" 
                    class="border-0" type="range" min="0" max="10" /></form>
                    <span class="font-weight-bold text-primary"></span>
                </b-col>
            </b-row>
        </div>
        <div>
            <b-row align-h="center">
                <b-col align-self="center" md="2">Input duration Time</b-col>
                <b-col md="3"><b-form-input
            id="durationTime"
            v-model="durationTime"
            placeholder="input desired duration time"
          />
                </b-col>
            </b-row>
        </div> 

        <div>
              <b-row class="mt-3 justify-content-md-center">
          <b-button @click="parameterSetting" :pressed.sync="settingWhich" variant="outline-primary">Submit Setting</b-button>
              </b-row>
              <b-row class="mt-3 justify-content-md-center">
          <p>Status: <strong>{{ settingWhich }}</strong></p>
              </b-row>
        </div> 
  
  
      </b-container>
  </div>  

</template>

<script>

import videojs from 'video.js'
import 'videojs-contrib-hls'

import Vue from 'vue'
import {BootstrapVue} from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import storageList from './storage/storageList' //database information input
//import fs from 'fs'
import axios from 'axios'
Vue.use(axios)
//import $ from 'jquery'
import lightimage from './storage/1.jpg' //background image


export default {
    name: "PlayerParameter",
    data () {
      return {
        lightimage, //image parameter
        dbArray: [], //store data from database
        playStatus: null,
        settingWhich: null, //the status showing bottom

        startTime: null,
        soundVolume: null,
        durationTime: null,
      }
    },
    created () {
      //here we load the filename within storageList onto dbArray
      let count = storageList.length;
      while (count--) {
        this.dbArray.push(storageList[count].filename)
      }
    },
    mounted () {    
      
    },
    methods: {
      selectbutton () {
        //have not yet finished !!!!!!!!!!!!!
        document.getElementById("selectbutton").style.color = "red";
        this.settingWhich = `You are setting ${name}`;
      },
      //so far, the below is useless
      sound01 () {
        //verify whether the input is correct
        if (Number(this.startTime) < 0) {
          alert('please input start time in seconds greater than 0');
          return;
        }
        if (Number(this.durationTime) < 0) {
          alert('please input durationTime time in seconds greater than 0');
          return;
        }
        if (Number(this.soundVolume) > 1 && Number(this.soundVolume) < 0) {
          alert('please input integer between 0 and 1, such as 0.5');
          return;
        } 
        document.getElementById("leftVideo").style.color = "green";
        document.getElementById("rightVideo").style.color = "green";
        document.getElementById("sound01").style.color = "red";
        //upload setting here
        axios.post('http://localhost:8080/fileListing.JSON', 
            [this.soun01Storage[0] = this.startTime,
            this.soun01Storage[1] = this.soundVolume,
            this.soun01Storage[2] = this.durationTime
            ]
          )
        this.soun01Storage[0] = this.startTime;
        this.soun01Storage[1] = this.soundVolume;
        this.soun01Storage[2] = this.durationTime; 

        var trackSound01 = document.getElementById("trackSound01")  
        this.playStatus = "sound is playing";     
        trackSound01.play(trackSound01.currentTime = this.startTime, trackSound01.volume = this.soundVolume, trackSound01.duration = this.durationTime);
          //maybe maximum parameter is two, the third parameter can't be set anyway
        
        
        
        
        //if there is need to confirm whether button is clicked
        //please refer to this link https://eloquentjavascript.net/15_event.html
        //
        /*
        let buttonName = document.getElementById("sound01");
        function actOnlyOnce() {
          buttonName.removeEventListener("click", once);
        }
        buttonName.addEventListener("click", once);
        */

      },
      leftVideo () {
        if (Number(this.startTime) < 0) {
          alert('please input start time in seconds greater than 0');
          return;
        }
        if (Number(this.durationTime) < 0) {
          alert('please input durationTime time in seconds greater than 0');
          return;
        }
        if (Number(this.soundVolume) > 1 && Number(this.soundVolume) < 0) {
          alert('please input integer between 0 and 1, such as 0.5');
          return;
        } 

        document.getElementById("leftVideo").style.color = "red";
        document.getElementById("rightVideo").style.color = "green";
        document.getElementById("sound01").style.color = "grey";

        let videoDisplay01 = this.$refs.videoPlayer01;
        //another option:
        //var videoDisplay01 = document.getElementById("videoPlayer01");
        //upload setting here
        axios.post('http://localhost:8080/fileListing.JSON', 
            [this.leftVideoStorage[0] = this.startTime,
            this.leftVideoStorage[1] = this.soundVolume,
            this.leftVideoStorage[2] = this.durationTime
            ]
          )
      
        //play video here, the {option} is necessary, otherwise currentTime is not readable
        videojs('videoPlayer01', {
        bigPlayButton: false,
        textTrackDisplay: false,
        posterImage: false,
        errorDisplay: false,
        controlBar: true,
        VolumeLevel: this.volume,
        }, () => {
          videoDisplay01.currentTime = this.startTime; 
          videoDisplay01.volume = this.volume; //volume is still not working
          videoDisplay01.duration = Number(this.duration);//so as duration
        }).play();
        videojs(videoDisplay01).on("playing", () => {
          this.playStatus = "video playing";
          });
        
        videojs(videoDisplay01).on("pause", () => {
          this.playStatus = "now pause";
          });
        videojs(videoDisplay01).on("ended", () => {
          this.playStatus = "now it has finished";
        })        
      },
      /*
      rightVideo () {
        if (Number(this.startTime) < 0) {
          alert('please input start time in seconds greater than 0');
          return;
        }
        if (Number(this.durationTime) < 0) {
          alert('please input durationTime time in seconds greater than 0');
          return;
        }
        if (Number(this.soundVolume) > 1 && Number(this.soundVolume) < 0) {
          alert('please input integer between 0 and 1, such as 0.5');
          return;
        } 

        document.getElementById("leftVideo").style.color = "green";
        document.getElementById("rightVideo").style.color = "red";
        document.getElementById("sound01").style.color = "grey";

        let videoDisplay02 = this.$refs.videoPlayer02;
        axios.post('http://localhost:8080/fileListing.JSON', 
            [this.rightVideoStorage[0] = this.startTime,
            this.rightVideoStorage[1] = this.soundVolume,
            this.rightVideoStorage[2] = this.durationTime
            ]
          )

        videojs('videoPlayer02', {
        bigPlayButton: false,
        textTrackDisplay: false,
        posterImage: false,
        errorDisplay: false,
        controlBar: true,
        VolumeLevel: this.volume,
        }, () => {
          videoDisplay02.currentTime = this.startTime; 
          videoDisplay02.volume = this.volume; //volume is still not working
          videoDisplay02.duration = Number(this.duration);//so as duration
        }).play();
        videojs(videoDisplay02).on("playing", () => {
          this.playStatus = "video playing";
          });
        videojs(videoDisplay02).on("pause", () => {
          this.playStatus = "now pause";
          });
        videojs(videoDisplay02).on("ended", () => {
          this.playStatus = "now it has finished";
        })   
      },
      parameterSetting() {
        //store setting in database
        this.settingWhich = "Setting Stored and Submitted"
      }
    */
    }
}


</script>



<style lang="css">
.videoRunner {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  margin-top: 60px;  
}
.soundRunner {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;  
}
</style>