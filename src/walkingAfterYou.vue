<template lang="html">
  <container :title="title">
    <div class="title">
      <h3>今晚不噩夢</h3>
    </div>
    <div class="videoFrame" style="width:1285px;height:500px;border:0px solid #000;">
      <div class="videoFrameLeft" style="float:left;width:640px;height:500px;border:0px solid #000;">
    <youtube video-id="ShMtdwTIGI0"
      @ready="ready"
      @ended="ended"
      @playing="playing"
      @paused="paused"
      @buffering="buffering"
      @qued="qued"
      :player-vars="{start: 13, autoplay: 1 }"
    ></youtube></div>
      <div class="videoFrameRight" style="float:right;width:640px;height:500px;border:0px solid #000;">
    <youtube video-id="R0PD3tR-eHI"
      @ready="ready"
      @ended="ended"
      @playing="playing"
      @paused="paused"
      @buffering="buffering"
      @qued="qued"
      :player-vars="{start: 0, autoplay: 1 }"
      :mute="true"
    ></youtube></div>    
    </div>

    
    
    <div class="introductiontitle">
      <h3>一起音樂。</h3>
    </div>

    <div class="introduction" style="width:1285px;height:300px;border:0px solid #000;">
      <div class="introductionleft" style="float:left;width:240px;height:240px;border:0px solid #000;">
      
    <h3>.....其他連結</h3>
    <ul>
      <li><a href="https://www.youtube.com/watch?v=TNwkN9vrUYY" target="_blank" rel="noopener">Official Music Video</a></li>      
      <li><a href="https://www.youtube.com/watch?v=HRAaW2eKJIk" target="_blank" rel="noopener">Live in 1998</a></li>
    </ul>
      </div>
      <div class="introductionright" style="float:right;width:1040px;height:300px;border:0px solid #000;">
        <h5>真的很奇怪.</h5> 
          <h5>為什麼有人要這樣做?</h5>
          <h5>有什麼好玩的?</h5>
          <h5>也許不好玩.</h5>
          <h5>哦.</h5>
          <h5>也許我應該先嘗試.</h5>
      </div>
    </div>
  </container>
</template>

<script>
import Vue from 'vue'
//import YouTubePlayer from 'youtube-player'
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)
//global.YouTubePlayer = YouTubePlayer;

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);


export default {
    props: ['title'],
    data () {
        return {
          
        }
    },

};

</script>

<style lang="css">
.title {
  margin: auto;
  width: 900px;
  height: 10px;
  vertical-align: middle;
  
  background: rgb(198, 204, 209);
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  font-family: lato-bold;
  font-size: 20px;
  color: rgb(34, 24, 27);
}
.videoFrame { 
  margin: auto;
  vertical-align: middle;
}
.videoFrameLeft {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  vertical-align: middle;
}
.videoFrameRight {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  vertical-align: middle;
}
.introductiontitle {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  vertical-align: middle;
}
.introduction {  
  margin: auto;
  vertical-align: middle;
}

</style>

