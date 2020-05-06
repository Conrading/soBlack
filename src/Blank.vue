<template>
    <b-container fluid="sm">
        <div class="mt-5">
            <div class="tagetText">
                <h7 >Welcome to participate</h7>
                <br>
                <h7>Please offer your opinion and leave your individual/firm information</h7>
            </div>
            <div class="mt-3">
                <b-row align-h="center">
                    <b-col align-self="center" md="2">Lawyer Name</b-col>
                    <b-col md="3"><b-form-input
                v-model="lawyerName"
                placeholder="name or certificate number"/>
                    </b-col>
                </b-row>
                <b-row align-h="center">
                    <b-col align-self="center" md="2">Law Firm</b-col>
                    <b-col md="3"><b-form-input
                v-model="firmName"
                placeholder="If you have"/>
                    </b-col>
                </b-row>
                <b-row align-h="center">
                    <b-col align-self="center" md="2">Law Firm Location</b-col>
                    <b-col md="3"><b-form-input
                v-model="firmLocation"
                placeholder="or Jurisdiction"/>
                    </b-col>
                </b-row>
                <b-row class="my-1 mt-2">
                    <b-col>Opinion:   <br>
                    <b-form-textarea
                v-model="opinion"
                rows="3"/>
                    </b-col>
                </b-row>

            <div>
                <b-row class="mt-3 justify-content-md-center">
            <b-button @click="claimCopyRight" :pressed.sync="claimWhich" variant="outline-primary">Submit Opinion</b-button>
                </b-row>
                <b-row class="mt-3 justify-content-md-center">
            <p>Status: <strong>{{ claimWhich }}</strong></p>
                </b-row>
            </div> 
            </div>
        </div>
    </b-container>
</template>

<script>
import Vue from 'vue'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
Vue.use(BootstrapVue, BootstrapVueIcons)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//import axios from 'axios'
//Vue.use(axios)

export default {
  name: 'Copy_Right_Claiming',
  data () {
    return {
        claimWhich: null,
    }
  },
  methods: {
    claimCopyRight () {
       this.claimWhich = "Your Opinion is now in Blockchain";
    },
  }
}
</script>
<style>
.tagetText {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; 
}
</style>