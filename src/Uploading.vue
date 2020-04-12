<template>
  <div class="container">
    <div class="uploadingRunner">
        <div>
          <b-row align-h="center">  
            <b-form-select v-model="selectedType" :options="typeOptions" class="mt-3"></b-form-select>
            <div class="mt-3">File Format: <strong>{{ selectedType }}</strong></div>
          </b-row>
        </div>

      <h5 class="mt-3">Upload your File</h5>
      <div class="large-12 medium-12 small-12 cell">
        <label>Files
          <input type="file" id="files" ref="files" multiple v-on:change="handleFilesUpload()"/>
        </label>
      </div>
      <div class="large-12 medium-12 small-12 cell">
        <div v-for="(file, key) in files" :key="file.name" class="file-listing">
          {{ file.name }} 
          <span class="remove-file" v-on:click="removeFile( key )">Remove</span>
        </div>
      </div>
      <br>
      <div>
        <p><strong>talk to me {{ status }}</strong></p>
      </div>
      <br>
      <div class="large-12 medium-12 small-12 cell">
        <b-button v-on:click="addFiles()">Add Files</b-button>
      </div>
      <br>
      <div class="large-12 medium-12 small-12 cell">
        <b-button v-on:click="submitFiles()">Submit</b-button>
      </div>
      <!--div class='upload'>
        <ul>
          <li v-for="file in files" :key="file.id">
            <span>{{file.name}}</span>
            <span>{{file.size | formatSize}}</span>
            <span v-if="file.error">{{file.error}}</span>
            <span v-else-if="file.success">success</span>
            <span v-else-if="file.active">active</span>
            <span v-else-if="file.active">active</span>
            <span v-else></span>
          </li>
        </ul>
        <div class="uploading-btn">
          <b-button variant="light">
            <file-upload
              class="btn btn-primary"
              post-action="/upload/post"
              extensions="mp3, WMA, WAV, WMV, MPG, MPEG, MP2, MP4, AVI, FLV"
              accept="audio/*,video/*,image/*"
              :multiple="true"
              v-model="files"
              @input-filter="inputFilter"
              @input-file="inputFile"
              ref="upload">
              <i class="fa fa-plus-square"></i>
              Select Files 
            </file-upload>
          </b-button>
          <b-button type="button" class="btn btn-success" variant="outline-light" v-if="!$refs.upload || !$refs.upload.active" @click.prevent="$refs.upload.active = true">
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
            Start Upload
          </b-button>
          <b-button type="button" class="btn btn-danger" variant="outline-light" v-else @click.prevent="$refs.upload.active = false">
            <i class="fa fa-stop" aria-hidden="true"></i>
            Stop Upload
          </b-button>
        </div>
      </div-->
    </div>
  </div>
</template>

<script>
//import FileUpload from 'vue-upload-component'
import Vue from 'vue'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
Vue.use(axios)

export default {
  name: 'Uploading',
  //components: {
    //FileUpload,
  //},
  data () {
    return {
      files: [],
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
  method: {
    addFiles(){
      this.status = "test";
      //this.$refs.files.click();
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

      this.axios.post({
        method: 'post',
        url: 'api/information.php',
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data'}}
      }
      ).then(() => {
        this.resetAll();
      })
    },
    handleFilesUpload() {
      let uploadedFiles = this.$refs.files.files;
      for(var i = 0; i < uploadedFiles.length; i++ ){
        this.status = 'lets die together';
        this.files.push( uploadedFiles[i] );
      }
    },
    removeFile( key ) {
      this.files.splice( key, 1 );
    }
    /*
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // Before adding a file
        // Filter system files or hide files
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent()
        }
        // Filter php html js file
        if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
          return prevent()
        }
      }
    },
    inputFile(newFile, oldFile) {
      if (newFile && !oldFile) {
        // add
        return('add', newFile)
      }
      if (newFile && oldFile) {
        // update
        return('update', newFile)
      }
      if (!newFile && oldFile) {
        // remove
        return('remove', oldFile)
      }
    }
    */
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
span.remove-file{
  color: red;
  cursor: pointer;
  float: right;
}
div.file-listing{
  width: 200px;
}
</style>
