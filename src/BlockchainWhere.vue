<template>
  <div class="container">
    <div class="declaration">
      <h5>Share your support directly with immutable record</h5>
    </div>


    <div class="blockInformation">
        <!--minimum share setting-->
        <div>
            <b-row align-h="center" >
                <b-col align-self="center" md="2">Input Minimum Share</b-col>
                <b-col md="3"><b-form-input
            id="minimumShare"
            v-model="minimumShare"
            placeholder="Input Integer"
          />
                </b-col>
            </b-row>
        </div>
        <div>
            <b-row align-h="center" class="mt-3 my-1">
                <b-col align-self="center">
                    <b-button @click="minimumShareButton" :pressed.sync="minimumShareNumber" variant="outline-secondary">Set Desired Share</b-button>
                </b-col>
            </b-row>
            <b-row class="mt-2 justify-content-md-center">
                <p>Status: <strong>You have set {{ minimumShareNumber }} % minimum share</strong></p>
            </b-row>
        </div>
        <!--minimum share setting-->

        <!--share method setting-->
        <div>
            <h5 class="mt-3">Choose the share method you agree</h5>
            <b-row class="justify-content-md-center">
                <b-col lg="2">
          <b-button ref="averageShare" :pressed.sync="averageShareMethod" variant="outline-primary">Average Share</b-button>
                </b-col>
                <b-col lg="2">
          <b-button ref="randomShare" :pressed.sync="randomShareMethod" variant="outline-primary">Random Share</b-button>
                </b-col>
            </b-row>
            <b-row class="mt-2 justify-content-md-center">now the average share is {{ averageShareMethod }}, and the random share is {{ randomShareMethod }}</b-row>
        </div>   
        <!--share method setting--> 
        <!--other information-->
        <div>
            <h5 class="mt-4 my-1">----------------------------------</h5>
            <b-row class="mt-4 my-1">
                <b-col>Bank Account:  <b-form-input
            id="inputName"
            v-model="inputName"
            placeholder="Input Account"
          />
                </b-col>
            </b-row>
        </div>
        <div>
            <b-row class="my-1">
                <b-col>Remark:   <br>
          <b-form-textarea
            class="Description"
            v-model="description"
            rows="3"
          />
                </b-col>
            </b-row>
        </div>
        <!--other information-->
        <!--press button and launch block-->
        <div>
          <b-button class="mt-2" variant="outline-secondary" @click="agreeParticipate" :pressed.sync="agreeButton">
            create final block and send to blockchain
          </b-button>
          <p class="mt-2">Agreement Status: <strong>{{ agreeButton }}</strong></p>
        </div>

    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import web3 from '../participantContract/web3'
import participantInstance from '../participantContract/participantInstance'
import participantBox from '../participantContract/participantBox'

export default {
  name: 'Blockchain',
  components: {
    
  },
  data () {
    return {
        //share number parameter
        decidedShare: null,
        minimumShare: null,
        minimumShareNumber: null,
        //share method parameter
        averageShareMethod: true,
        randomShareMethod: true,
        //blockchain fee
        processFee: '2',
        amount: 0,
        agreeButton: null,
        inputName: null,
        description: '',
    }
  },
  beforeMount() {
    participantBox.methods.returnAllParticipants().call().then((participants) => {
      this.amount = participants.length;
    });
  },
  methods: {
      minimumShareButton() {
        if(Number(this.minimumShare) < 0 || Number(this.minimumShare) > 100) {
          alert('please input minimum share a positive number, or less than 100');
          return;
        }
        if(!Number.isInteger(Number(this.minimumShare))) {
          alert('please input integer number!')
          return;
        }
        if(this.minimumShare == null) {
          alert('You miss minimum share');
          return;
        }
        web3.eth.getAccounts().then((accounts) => {
            this.decidedShare = this.minimumShare;
            const processFee = web3.utils.toWei(this.processFee, 'ether');
            return participantBox.methods.minimumShareButton(this.decidedShare, processFee).send({ from: accounts[0], gas: 1000000 })
        }).then(() => {
            this.minimumShareNumber = this.decidedShare;
        })
    },
    agreeParticipate() {
        if((this.averageShareMethod) == false && (this.randomShareMethod) == false) {
          alert("please at least select one payment method!");
          this.agreeButton = null;
          return;
        }
        if(this.inputName == null) {
          alert('Dont forget to input your bank account');
          return;
        }

        web3.eth.getAccounts().then((accounts) => {
          if((this.averageShareMethod) == true && (this.randomShareMethod) == true) {
            const resultAverageShare = ((100 - (Number(this.decidedShareLeft) + Number(this.decidedShareRight)))/ 2);
            this.agreeButton = "Done! you have created block.";
            return participantInstance.methods.averageShareCalculation(resultAverageShare, this.description).send({ from: accounts[0], gas: 1000000 });
          }
          else if ((this.averageShareMethod) == true && (this.randomShareMethod) == false) {
            const resultAverageShare = ((100 - (Number(this.decidedShareLeft) + Number(this.decidedShareRight)))/ 2); 
            this.agreeButton = "YDone! you have created block.";
            return participantInstance.methods.averageShareCalculation(resultAverageShare, this.description).send({ from: accounts[0], gas: 1000000 });
          }
          else if ((this.randomShareMethod) == false && (this.randomShareMethod) == true) {
            this.agreeButton = "Done! you have created block.";
            return participantInstance.methods.randomShareCalculation(this.description).send({ from: '0x2c65a8e0e59b72b0f4207d28daa986c719753ae9', gas: 1000000 });
          }
        });
    }
  }
}

</script>

<style>
.declaration {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; 
}
.blockInformation {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;  
}
</style>
