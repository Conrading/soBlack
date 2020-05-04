<template>
    <div class="container">
        <div class="tagetProject">
            <h3>Silex | Oasis</h3>
        </div>
        <div class="searchBar">
            <input type="text" v-model="search" :pressed.sync="inputstatus" placeholder="New Search">
            <b-button v-on:click="searchTask" variant="light" size="sm">search</b-button>
        </div>
        <!--div ref="playpage" v-if="inputstatus == false">
            <span>
                <br>    
                <Main></Main>
            </span>
        </div>
        <div ref="search" v-else-if="inputstatus == true">
            <span>
                <br>    
                <SearchDisplay></SearchDisplay>
            </span>
        </div-->
        <div id="mainPart" class="mt-3">
    <div :style="{backgroundImage: `url(${lightimage})`}"> <!--upload image here-->
            <b-row>
                <b-col cols="8"><FilePlayer></FilePlayer></b-col>
                <b-col cols="4"><SearchDisplay></SearchDisplay></b-col>
            </b-row>
    </div>
            <b-row><Main></Main></b-row>
        </div>
        <b-row class="mt-5 justify-content-md-center">
            <h6>2020 Silex Oasis. All Rights Reserved</h6>
        </b-row>
    </div>
</template>
<script>
import Vue from 'vue'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
Vue.use(BootstrapVue, BootstrapVueIcons)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import SearchDisplay from './SearchDisplay'
import FilePlayer from './FilePlayer'
import Main from './Main'
import lightimage from './storage/3.jpg' //background image

export default {
    name: 'Homepage',
    components: {
        SearchDisplay,
        FilePlayer,
        Main
    },
    data () {
        return {
        lightimage, //image parameter
            search: '',
            //inputstatus: false
        }
    },
    methods: {
        searchTask () {
            //this.inputstatus == true
            //here we generate video/audio player
        }
    }
}


</script>
<style>
.tagetProject {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; 
}
.searchBar {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 25px;
}
</style>

