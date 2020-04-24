<template>
  <div class="container">
    <!--div class="tagetProject">
      <h3>Silex | Oasis</h3>
    </div>
    <div class="searchBar">
        <input type="text" v-model="search" placeholder="New Search" @click="searchTask">
    </div-->
    <!--a href="url"><h6>back to search page</h6></a-->
    <nav>
      <div class="directing">
          <a><router-link to="/Blank"><b-button size="sm" variant="outline-dark"> Purpose </b-button></router-link></a>
          <a><router-link to="/Uploading"><b-button size="sm" variant="outline-dark"> Uploading Files </b-button></router-link></a>
          <a><router-link to="/PlayerParameter"><b-button size="sm" variant="outline-dark"> Set Parameter </b-button></router-link></a>
          <a><router-link to="/BlockchainHere"><b-button size="sm" variant="outline-dark"> Blockchain </b-button></router-link></a>
        <router-view/>
      </div>
    </nav>
  </div>
</template>

<script>
import Vue from 'vue'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
Vue.use(BootstrapVue, BootstrapVueIcons)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


export default {
  name: 'Project',
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
.searchBar {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 25px;
}
</style>
