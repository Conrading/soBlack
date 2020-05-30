<template>
  <div class="container">    
    <b-container class="mt-5">
        <!--div :style="{backgroundImage: `url(${image2})`}"--> <!--upload image here-->
              <b-row class="mt-3" align-h="center">
          <label for="parameterSetting">
            ---- Click button twice to set file parameter ----
          </label>
              </b-row>
              <ul id="autobutton">
                <b-row align-h="center">
                  <div v-for="(name, index) in dbArray" :key='(name.id, index)'>
                    <b-col>
                      <b-button ref="selectbutton" 
                                v-on:click="name.pressingStatus = !name.pressingStatus" 
                                size="sm" pill variant="outline-dark"
                                @click="pressedCheck($event, name)">
                        <i v-bind:class="[{ 'green' : name.pressingStatus}, 'material-icons']">{{ name.filename }}</i>
                      </b-button>
                    </b-col>
                  </div>
                </b-row>
                <!--b-row class="mt-3 justify-content-md-center">
                  <p>Status: <strong>{{ settingWhich }}</strong></p>
                </b-row-->
              </ul>
        <!--/div-->
        <div class="mt-4">
            <b-row align-h="center">
                <b-col align-h="end" align-self="center" lg="1.5">Start playing at </b-col>
                <b-col md="1"><b-form-input id="startTime" v-model="startTime"/></b-col>
                <b-col align-h="start" align-self="center" lg="0.8">seconds</b-col>
            </b-row>
            <b-row class="mt-2 justify-content-md-center">Current value is : {{ stStatus }}</b-row>
        </div>
        <div class="my-4">
            <b-row align-h="center">
                <b-col align-self="center" md="2">Input Volume</b-col>
                <b-col md="3">
                  <b-form-input type="range" min="0" max="10" v-model="soundVolume"></b-form-input>
                  <!--form class="range-field w-75">
                  <input id="soundVolume" 
                    class="border-0" type="range" min="0" max="10" /></form>
                    <span class="font-weight-bold text-primary"></span-->
                </b-col>
            </b-row>
            <b-row class="mt-2 justify-content-md-center">Current value is : {{ svStatus }}</b-row>
        </div>
        <!--div>
            <b-row align-h="center">
                <b-col align-self="center" md="2">Input duration Time</b-col>
                <b-col md="3"><b-form-input
            id="durationTime"
            v-model="durationTime"
            placeholder="input desired duration time"
          />
                </b-col>
            </b-row>
        </div--> 


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
import Vue from 'vue'
import {BootstrapVue} from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import http from './http-axios'


export default {
    name: "PlayerParameter",
    data () {
      return {
        //image2, //image parameter
        playerData: null,
        dbArray: [], //store data from database
        settingWhich: null, //the status showing bottom
        filenameSetting: null,

        startTime: null,
        stStatus: null,
        soundVolume: null,
        svStatus: null,
        //durationTime: null,
      }
    },
    created () {
      //here we load the filename within storageList onto dbArray
      http.get("/Homepage").then(response => {this.playerData = response.data;
      let count = this.playerData.Rfj8polsG.length;
      while (count--) {
        if(this.playerData.Rfj8polsG[count].type == "video" || this.playerData.Rfj8polsG[count].type == "audio") {
        this.dbArray.push(this.playerData.Rfj8polsG[count])}
      }
      }).catch(err => {this.settingWhich = err;});
    },
    methods: {
      pressedCheck(event, name) {
        //pick which file is set parameter
        name.active = true; //add this then toggle once is enough
        if (name.active) {
          name.active = false;
          this.settingWhich = "you are setting " + name.filename;
          this.filenameSetting = name.filename
          let count = this.playerData.Rfj8polsG.length;
          while (count--) {
            //once the name is identical, then change parameter accordingly
          if (this.playerData.Rfj8polsG[count].filename == this.filenameSetting) {
              this.stStatus = this.playerData.Rfj8polsG[count].startPlay
              this.svStatus = this.playerData.Rfj8polsG[count].volume
              }
            }
        } else if (!name.active) {
          Vue.set (name, 'active', true)
        }
      },
      parameterSetting () {
          let count = this.playerData.Rfj8polsG.length;
          while (count--) {
            if (this.playerData.Rfj8polsG[count].filename == this.filenameSetting) {
              //this.stStatus = this.playerData.Rfj8polsG[count].startPlay
              //this.svStatus = this.playerData.Rfj8polsG[count].volume
              if (this.startTime == null) { //if no start time input, then assume only soundvolume changed
                const justUpdate = {
                  filename: this.filenameSetting,
                  volume: (this.soundVolume / 10)
                  }
                http.post("/Homepage/PlayerParameter", {justUpdate})
                .then(this.settingWhich = "you have set volume to " + (this.soundVolume / 10))
                .catch(err => {this.settingWhich = err;});  
              }
              if (this.soundVolume == null) { 
                const justUpdate = {
                  filename: this.filenameSetting,
                  startPlay: this.startTime
                  }
                http.post("/Homepage/PlayerParameter", {justUpdate})
                .then(this.settingWhich = "you have set star time to " + this.startTime)
                .catch(err => {this.settingWhich = err;});  
              }
              if (this.startTime != null && this.soundVolume != null) { 
                const justUpdate = {
                  filename: this.filenameSetting,
                  startPlay: this.startTime, 
                  volume: (this.soundVolume / 10)
                  }
                http.post("/Homepage/PlayerParameter", {justUpdate})
                .then(this.settingWhich = "you have set star time to " + this.startTime + " and volume to " + (this.soundVolume / 10))
                .catch(err => {this.settingWhich = err;});  
              }
            }
          }
        }
      /*
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
        //let buttonName = document.getElementById("sound01");
        //function actOnlyOnce() {
        //  buttonName.removeEventListener("click", once);
        //}
        //buttonName.addEventListener("click", once);

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
.green {
  color: green;
}
.active { color: red}
</style>