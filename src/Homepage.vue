<template>
    <div class="container">
        <div class="tagetProject">
            <h3>Silex | Oasis</h3>
        </div>
        <div class="searchBar">
            <input type="text" v-model="search" placeholder="New Search" @click="searchTask">
        </div>
        <br>
        <SearchDisplay></SearchDisplay>
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

export default {
    name: 'Homepage',
    components: {
        SearchDisplay
    },
    data () {
        return {
            search: ''
        }
    },
    methods: {
        searchTask () {
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

