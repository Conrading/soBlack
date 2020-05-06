<template>
    <div class="container">
        <div class="tagetProject">
            <b-row>
                <b-col align-self="center">
                    <h4>Silex | Oasis</h4>
                </b-col>
                <b-col align-self="center">
                    <input type="text" v-model="search" :pressed.sync="inputstatus" placeholder="New Search">
                    <b-button v-on:click="searchTask" variant="light" size="sm">search</b-button>
                </b-col>
                <b-col>
                    <md-button id="home" v-on:click="home" :pressed.sync="homeClick" class="md-icon-button">
                        <md-icon>H</md-icon>
                    </md-button>
                    <md-button id="bChain" v-on:click="bChain" :pressed.sync="bChainClick" class="md-icon-button">
                        <md-icon>$</md-icon>
                    </md-button>
                    <md-button id="copyRight" v-on:click="copyRight" :pressed.sync="copyRightClick" class="md-icon-button">
                        <md-icon>©</md-icon>
                    </md-button>
                    <!--a><router-link to="/BlockchainHere"><b-button size="sm" variant="outline-dark"> Blockchain </b-button></router-link></a>
                    <a><router-link to="/Blank"><b-button size="sm" variant="outline-dark"> Copy Right Claim </b-button></router-link></a-->
                </b-col>
            </b-row>
        </div>

        <br>
        <div v-if="homeClick == true">
            <span class="mt-3">
                <div :style="{backgroundImage: `url(${lightimage})`}"> <!--upload image here-->
                    <b-row>
                        <b-col cols="8"><FilePlayer></FilePlayer></b-col>
                        <b-col cols="4"><SearchDisplay></SearchDisplay></b-col>
                    </b-row>
                </div>
                <b-row><ButtonBottom></ButtonBottom></b-row>
            </span>
        </div>
        <div v-if="bChainClick == true">
            <span class="mt-3">
                <b-row><BlockchainHere></BlockchainHere></b-row>
            </span>
        </div>
        <div v-if="copyRightClick == true">
            <span class="mt-3">
                <b-row><Blank></Blank></b-row>
            </span>
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
        <div>
            <b-row class="mt-5 justify-content-md-center">
                <h6>2020 Silex Oasis. All Rights Reserved</h6>
            </b-row>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
Vue.use(BootstrapVue, BootstrapVueIcons)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(MdButton, MdContent, MdTabs)
import SearchDisplay from './SearchDisplay'
import FilePlayer from './FilePlayer'
import ButtonBottom from './ButtonBottom'
import BlockchainHere from './BlockchainHere'
import Blank from './Blank'
import lightimage from './storage/3.jpg' //background image

export default {
    name: 'Homepage',
    components: {
        SearchDisplay,
        FilePlayer,
        ButtonBottom,
        BlockchainHere,
        Blank
    },
    data () {
        return {
            lightimage, //image parameter
            search: '',
            //below three are for button status, confirm pressing status
            homeClick: true, 
            bChainClick: false,
            copyRightClick: false
            //inputstatus: false
        }
    },
    created () {
            this.homeClick = true;
            this.bChainClick = false;
            this.copyRightClick = false;
            document.getElementById("home").style.color = "green";
            document.getElementById("bChain").style.color = "black";
            document.getElementById("copyRight").style.color = "black";
    },
    methods: {
        searchTask () {
            //this.inputstatus == true
            //here we generate video/audio player
        },
        home () {
            this.homeClick = true;
            this.bChainClick = false;
            this.copyRightClick = false;
            document.getElementById("home").style.color = "green";
            document.getElementById("bChain").style.color = "black";
            document.getElementById("copyRight").style.color = "black";
        },
        bChain () {
            this.homeClick = false;
            this.bChainClick = true;
            this.copyRightClick = false;
            document.getElementById("home").style.color = "black";
            document.getElementById("bChain").style.color = "green";
            document.getElementById("copyRight").style.color = "black";
        },
        copyRight () {
            this.homeClick = false;
            this.bChainClick = false;
            this.copyRightClick = true;
            document.getElementById("home").style.color = "black";
            document.getElementById("bChain").style.color = "black";
            document.getElementById("copyRight").style.color = "green";}
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

