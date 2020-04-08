<template>
  <div class="container">
    <div class="tagetProject">
      <h3>Silex | Oasis</h3>
    </div>
    <FilePlayer></FilePlayer>
    <nav>
      <div class="directing">
          <a><router-link to="/Blank"><b-button variant="outline-info"> Purpose </b-button></router-link></a>
          <a><router-link to="/Uploading"><b-button variant="outline-info"> Uploading Files </b-button></router-link></a>
          <a><router-link to="/PlayerParameter"><b-button variant="outline-info"> Set Parameter </b-button></router-link></a>
          <a><router-link to="/BlockchainHere"><b-button variant="outline-info"> Blockchain </b-button></router-link></a>
        <router-view/>
      </div>
    </nav>
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
import FilePlayer from './FilePlayer'


export default {
  name: 'Project',
  components: {
    FilePlayer,
  },
  data () {
    return {
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
.directing {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;  
}
</style>
