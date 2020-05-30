<template>
  <div class="container">
    <div class="uploadingRunner">
      <!--Choosing file to replace-->
      <div>
              <b-row class="justify-content-md-center">
          <label for="parameterSetting">
            ---- Choose the File you want to replace ----
          </label>
              </b-row>
              <ul id="autobutton">
                <b-row align-h="center">
                  <div v-for="name in dbArray" :key='name.id'>
                    <b-col>
                      <b-button id="selectbutton" 
                                v-on:click="name.pressingStatus = !name.pressingStatus" 
                                size="sm" pill variant="outline-dark">
                        <i v-bind:class="[{ 'green' : name.pressingStatus}, 'material-icons']">{{ name.filename }}</i>
                      </b-button>
                    </b-col>
                  </div>
                </b-row>
              </ul>
      </div>
      <!--upload file-->
      <div>
        <b-row align-h="center">  
          <b-form-select v-model="selectedType" :options="typeOptions" class="mt-3"></b-form-select>
          <div class="mt-3">File Format: <strong>{{ selectedType }}</strong></div>
        </b-row>
      </div>

      <h5 class="mt-3">Share your Work</h5>
      <div class="large-12 medium-12 small-12 cell">
        <label>File(s) you shared
          <input type="file" id="files" ref="files" multiple v-on:change="handleFilesUpload()"/>
        </label>
      </div>
      <div class="justify-content-md-center">
        <div v-for="(file, key) in files" :key="file.name" class="justify-content-md-center">
          <span>{{ file.name }}</span>
          <span v-if="file.error">{{ file.error }}</span>
          <span v-else></span>
          <b-button class="remove-file" v-if="!$refs.files || !$refs.files.active" v-on:click="removeFile( key )" variant="outline-light">Remove</b-button>
        </div>
      </div>
      <div>
        <b-row class="justify-content-md-center mt-3">
            <b-button @click="addFiles" :pressed.sync="status" variant="outline-success">Add Files</b-button>
            <b-button @click="submitFiles" :pressed.sync="status" variant="outline-success">Submit</b-button>
        </b-row>
        <b-row class="mt-3 justify-content-md-center">
            <p>Uploading: <strong>{{ status }}</strong></p>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
Vue.use(BootstrapVue, BootstrapVueIcons)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import storageList from './storage/storageList' //database information input
import http from './http-axios'

export default {
  name: 'Uploading',
  data () {
    return {
      files: [],
      playerData: null, //get data from backend to this parameter
      dbArray: [], //store data from database
      typeOptions: [
        { value: null, text: 'please select file format you upload'},
        { value: 'video', text: 'video file format'},
        { value: 'audio', text: 'audio file format'},
        { value: 'image', text: 'image file format'},
        { value: 'text', text: 'text file format'},
      ],
      selectedType: null,
      status: null
    }
  },
  created () {
    //here we load the filename within storageList onto dbArray
    /*
    let count = storageList.length;
    while (count--) {
      this.dbArray.push(storageList[count]) //instead of uploading specific parameter, we upload the whole
    }
    */
      http.get("/Homepage").then(response => {this.playerData = response.data;
      let count = this.playerData.Rfj8polsG.length;
      while (count--) {
        if(this.playerData.Rfj8polsG[count].type == "video" || this.playerData.Rfj8polsG[count].type == "audio") {
        this.dbArray.push(this.playerData.Rfj8polsG[count])}
      }
      }).catch(err => {this.status = err;});
  },
  methods: {
    addFiles(){
      this.$refs.files.click();
    },
    submitFiles(){
      let formData = new FormData();
      for( var i = 0; i < this.files.length; i++ ){
        let file = this.files[i];
        formData.append('files[' + i + ']', file);
        formData.append('filetype', this.selectedType);
        formData.append('filetitle', file.name);
        formData.append('location', './storage');
      }
      this.status = "Submitting.....";

      this.axios.post({
        method: 'post',
        //url: 'api/information.php',
        baseURL: "http://localhost:8080/api",
        data: formData,
        //config: { headers: {'Content-Type': 'multipart/form-data'}}
        config: { headers: {'Content-Type': 'application/json'}}
      }
      ).then(() => {
        this.status = "Success !!"
        this.resetAll();
      }).catch(() => {
        this.status = "Failure !!"
      })
    },
    handleFilesUpload() {
      let uploadedFiles = this.$refs.files.files;
      for(var i = 0; i < uploadedFiles.length; i++ ){
        this.status = "You have just selected " + uploadedFiles.length + " File(s)";
        this.files.push( uploadedFiles[i] );
      }
    },
    removeFile( key ) {
      this.files.splice( key, 1 );
    },
    resetAll(){
      this.selectedType = null;
      this.status = null;
      this.files = [];
    }
  }
}

</script>

<style>
.uploadingRunner {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;  
}
input[type="file"]{
  position: absolute;
  top: -500px;
}
span.remove-file{
  color: red;
  cursor: pointer;
  float: right;
}
div.file-listing{
  width: 200px;
}
.green {
  color: green;
}
</style>
