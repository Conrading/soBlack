<template>
  <div class="container">
    <div class="uploadingRunner">
      <div>
        <h5 class="mb-3">choose the file you want to replace</h5>
        <b-button variant="outline-dark">Left Video</b-button>
        <b-button variant="outline-dark">Right Video</b-button>
        <b-button variant="outline-dark">First Sound</b-button>
      </div>

      <h5 class="mt-3">Upload your File</h5>
      <div class='upload'>
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
      </div>
    </div>
  </div>
</template>

<script>
import FileUpload from 'vue-upload-component'
import Vue from 'vue'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'Uploading',
  components: {
    FileUpload,
  },
  data () {
    return {
      files: [],
    }
  },
  method: {
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
</style>
