<template>
  <div class="container">
    <div class="declaration">
      <h5>Share your support</h5>
    </div>
        <!--Explanation-->
    <div>
        <b-card-group deck>
            <b-card
            header="Support Artsits"
            header-tag="header"
            border-variant="info"
            title="Directly Support">
                <b-card-text>
                    You can sned money to support artists directly, you might thus get coupon for music purchase, or live gig ticket from them
                </b-card-text>
                <template v-slot:footer>
                    <b-button href="https://31withnowhere.wixsite.com/notionoasis/project05" variant="outline-dark">More Detail</b-button>
                </template>
            </b-card>
            <b-card
            header="Find Partner"
            header-tag="header"
            border-variant="success"
            title="Collaboration">
                <b-card-text>
                    You can share with your music partner, continue greater work all together
                </b-card-text>
                <template v-slot:footer>
                    <b-button href="https://31withnowhere.wixsite.com/notionoasis/project06" variant="outline-dark">More Detail</b-button>
                </template>
            </b-card>
            <b-card
            header="Invest Potential"
            header-tag="header"
            border-variant="secondary"
            title="Investment">
                <b-card-text>
                    You might have found some talent work or artists, and you want to invest them  
                </b-card-text>
                <template v-slot:footer>
                    <b-button href="https://31withnowhere.wixsite.com/notionoasis/project07" variant="outline-dark">More Detail</b-button>
                </template>
            </b-card>
        </b-card-group>
    </div>


    <div class="blockInformation">
        <!--toggle blockchain--> 
            <div :style="{backgroundImage: `url(${image1})`}">
        <div>
            <b-row ><h6></h6></b-row> 
            <b-row class="justify-content-md-center">
                <h5>Toggle blockchain</h5>
            </b-row> 
            <b-row class="mt-2 justify-content-md-center">   
                <b-col align-self="center" md="2">
                    <b-button 
                    @click="blockchainToggle" 
                    :pressed.sync="blockchainDeicision" 
                    variant="outline-primary">
                    Press to toggle
                    </b-button>
                </b-col>
                <b-col align-self="center" md="3"><strong>{{ optAnswer }}</strong></b-col>
            </b-row>
            <b-row class="justify-content-md-center">
                <b-nav small>
                    <b-nav-item href="https://en.wikipedia.org/wiki/Blockchain" variant="light">What is Blockchain?</b-nav-item>
                    <b-nav-item href="https://dzone.com/articles/a-guide-to-blockchain-immutability-and-chief-chall" variant="light">Why I use Blockchain?</b-nav-item>
                    <b-nav-item href="https://www.youtube.com/watch?v=ZIGUC9JAAw8" variant="light">How to use Blockchain here?</b-nav-item>
                </b-nav>
            </b-row>
        </div>   
            </div> <!--background pic range-->
        <!--Below using tab--> 
        <div class="mt-2">
            <b-row class="justify-content-md-center">
                <h5>Transaction</h5>
            </b-row> 
            <b-tabs content-class="mt-3">
            <!--information before-->
                <b-tab title="Information before you send" active>
                    <div>
                        <b-row align-h="center" >
                            <b-col align-self="center" md="2">Your Name</b-col>
                            <b-col md="3"><b-form-input
                        id="offeringGuy"
                        v-model="offeringGuy"/>
                            </b-col>
                        </b-row>
                    </div>
                    <span v-if="blockchainDeicision == true ">
                        <b-row align-h="center" >
                            <b-col align-self="center" md="2">Your blockchain address</b-col>
                            <b-col md="3"><b-form-input
                        id="offeringGuyAddress"
                        v-model="offeringGuyAddress"/>
                            </b-col>
                        </b-row>
                    </span>
                    <div>
                        <b-row align-h="center" >
                            <b-col align-self="center" md="2">Your Phone</b-col>
                            <b-col md="3"><b-form-input
                        id="phone"
                        v-model="phone"/>
                            </b-col>
                        </b-row>
                    </div>
                    <div>
                        <b-row align-h="center" >
                            <b-col align-self="center" md="2">Your E-Mail</b-col>
                            <b-col md="3"><b-form-input
                        id="email"
                        v-model="email"/>
                            </b-col>
                        </b-row>
                    </div>
                    <div>
                        <b-row class="mt-4 justify-content-md-center">
                            <b-col align-self="center" md="1"><label class="mr-sm-2" for="inline-form-custom-select-pref">Currency</label></b-col>
                            <b-col align-self="center" md="3">
                                <b-form-select
                                id="inline-form-custom-select-pref"
                                class="mb-2 mr-sm-2 mb-sm-0"
                                v-model="currencyChoose"
                                :options="currency"
                                :value="null"
                                ></b-form-select>
                            </b-col>
                            <b-col align-self="center" md="2">
                                <b-form-input
                                id="amountMoney"
                                placeholder="input a number"
                                v-model="amountMoney"/>
                            </b-col>
                            <b-col align-self="center" md="2">
                                You decide to send: <strong>{{ currencyChoose + amountMoney }}</strong>
                            </b-col>
                        </b-row>
                    </div>
                    <div>
                        <b-row class="mt-4 justify-content-md-center">
                            <b-col align-self="center" md="3"><label class="mr-sm-2" for="inline-form-custom-select-pref">Select your intention</label></b-col>
                            <b-col align-self="center" md="3">
                                <b-form-select
                                id="inline-form-custom-select-pref"
                                class="mb-2 mr-sm-2 mb-sm-0"
                                v-model="itemChoose"
                                :options="itemMoney"
                                :value="null"
                                ></b-form-select>
                            </b-col>
                            <b-col align-self="center" md="3">
                                You choose to: <strong>{{ itemChoose }}</strong>
                            </b-col>
                        </b-row>
                    </div>
                    <div>
                        <b-row class="mt-4 justify-content-md-center">
                            <b-col align-self="center" md="3">
                                <b-form-input v-model="artistNumber" placeholder="Enter Artist ID number"></b-form-input>
                            </b-col>
                            <b-col align-self="center" md="2">
                                You choose Artist: <strong>{{ artistChoose }}</strong>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="mt-4">
                        <b-row class="justify-content-md-center"><h6>Select the date of transaction</h6></b-row>
                        <b-row class="justify-content-md-center"><b-calendar v-model="transactionDate" :min="min" :max="max" locale="en"></b-calendar></b-row>
                    </div>
                    <div>
                        <b-row class="my-3">
                            <b-col>Remark:   <br>
                    <b-form-textarea
                        class="Description"
                        v-model="description"
                        rows="3" />
                            </b-col>
                        </b-row>
                    </div>
        <!--the before button setting-->
                    <div>
                        <b-row align-h="center" class="mt-3 my-1">
                            <b-col align-self="center">
                                <b-button @click="transactionButton" :pressed.sync="transactionStatus" variant="outline-secondary">Decide to send</b-button>
                            </b-col>
                        </b-row>
                        <b-row class="mt-2 justify-content-md-center">
                            <p><strong>{{ transactionStatus }}</strong></p>
                        </b-row>
                    </div>
                </b-tab>

            <!--information after-->
                <b-tab title="Information after you send" active>
                    <div>
                        <b-row align-h="center" >
                            <b-col align-self="center" md="2">Your Name</b-col>
                            <b-col md="3"><b-form-input
                        id="offeringGuy"
                        v-model="offeringGuy"/>
                            </b-col>
                        </b-row>
                    </div>
                    <span v-if="blockchainDeicision == true ">
                        <b-row align-h="center" >
                            <b-col align-self="center" md="2">Your blockchain address</b-col>
                            <b-col md="3"><b-form-input
                        id="offeringGuyAddress"
                        v-model="offeringGuyAddress"/>
                            </b-col>
                        </b-row>
                    </span>
                    <div>
                        <b-row align-h="center" >
                            <b-col align-self="center" md="2">Your Phone</b-col>
                            <b-col md="3"><b-form-input
                        id="phone"
                        v-model="phone"/>
                            </b-col>
                        </b-row>
                    </div>
                    <div>
                        <b-row align-h="center" >
                            <b-col align-self="center" md="2">Your E-Mail</b-col>
                            <b-col md="3"><b-form-input
                        id="email"
                        v-model="email"/>
                            </b-col>
                        </b-row>
                    </div>
                    <div>
                        <b-row class="mt-4 justify-content-md-center">
                            <b-col align-self="center" md="1"><label class="mr-sm-2" for="inline-form-custom-select-pref">Currency</label></b-col>
                            <b-col align-self="center" md="3">
                                <b-form-select
                                id="inline-form-custom-select-pref"
                                class="mb-2 mr-sm-2 mb-sm-0"
                                v-model="currencyChoose"
                                :options="currency"
                                :value="null"
                                ></b-form-select>
                            </b-col>
                            <b-col align-self="center" md="2">
                                <b-form-input
                                id="amountMoney"
                                placeholder="input a number"
                                v-model="amountMoney"/>
                            </b-col>
                            <b-col align-self="center" md="2">
                                You have sent: <strong>{{ currencyChoose + amountMoney }}</strong>
                            </b-col>
                        </b-row>
                    </div>
                    <div>
                        <b-row class="mt-4 justify-content-md-center">
                            <b-col align-self="center" md="3"><label class="mr-sm-2" for="inline-form-custom-select-pref">Select your intention</label></b-col>
                            <b-col align-self="center" md="3">
                                <b-form-select
                                id="inline-form-custom-select-pref"
                                class="mb-2 mr-sm-2 mb-sm-0"
                                v-model="itemChoose"
                                :options="itemMoney"
                                :value="null"
                                ></b-form-select>
                            </b-col>
                            <b-col align-self="center" md="3">
                                You choose to: <strong>{{ itemChoose }}</strong>
                            </b-col>
                        </b-row>
                    </div>
                    <div>
                        <b-row class="mt-4 justify-content-md-center">
                            <b-col align-self="center" md="3">
                                <b-form-input v-model="artistNumber" placeholder="Enter Artist ID number"></b-form-input>
                            </b-col>
                            <b-col align-self="center" md="2">
                                Artist you chose: <strong>{{ artistChoose }}</strong>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="mt-4">
                        <b-row class="justify-content-md-center"><h6>Select the date of transaction</h6></b-row>
                        <b-row class="justify-content-md-center"><b-calendar v-model="transactionDate" :min="min" :max="max" locale="en"></b-calendar></b-row>
                    </div>
                    <div>
                        <b-row class="my-3">
                            <b-col>Remark:   <br>
                    <b-form-textarea
                        class="Description"
                        v-model="description"
                        rows="3" />
                            </b-col>
                        </b-row>
                    </div>
        <!--the after button setting-->
                    <div>
                        <b-row align-h="center" class="mt-3 my-1">
                            <b-col align-self="center">
                                <b-button @click="transactionButton" :pressed.sync="transactionStatus" variant="outline-secondary">Confirm transaction</b-button>
                            </b-col>
                        </b-row>
                        <b-row class="mt-2 justify-content-md-center">
                            <p><strong>{{ transactionStatus }}</strong></p>
                        </b-row>
                    </div>
                </b-tab>

        <!--other information-->
                <!--explain the information users input-->
                <b-tab title="Explanation">
                    <b-row>
                    <b-card
                        overlay
                        img-src="./storage/5.jpg"
                        img-alt="Card Image"
                        text-variant="white"
                        title="We don't interven your support">
                        <b-card-text>We offer platform that you can send surpport directly to artists</b-card-text>
                    </b-card>
                    </b-row>
                    <b-row>
                    <b-card
                        overlay
                        img-src="./storage/1.jpg"
                        img-alt="Card Image"
                        text-variant="white"
                        title="It is Decentralized money distribution">
                        <b-card-text>You send the money directly to artists, that is why you need to leave your contact, because artists will send you his bank account</b-card-text>
                        <b-card-text>Blockchain here helps to record money transferring</b-card-text>
                    </b-card>
                    </b-row>
                </b-tab>
            </b-tabs>
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

import image1 from './storage/6.jpg'

import storageList from './storage/storageList' //database information input
import web3 from '../participantContract/web3'
import participantInstance from '../participantContract/participantInstance'
import participantBox from '../participantContract/participantBox'

export default {
  name: 'Blockchain',
  components: {
    
  },
  data () {
      //below is for calendar
      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      // 15th two months prior
      const minDate = new Date(today)
      minDate.setMonth(minDate.getMonth() - 2)
      minDate.setDate(15)
      // 15th in two months
      const maxDate = new Date(today)
      maxDate.setMonth(maxDate.getMonth() + 2)
      maxDate.setDate(15)
      //calendar till here
    return {
        image1, //background pic
        //decision to blockchain usage
        blockchainDeicision: true, //to show whether blockchain is selected
        optAnswer: null, //toggle result whether blockchain is adopted
        //input offering information
        offeringGuy: null, //used to be minimumShare
        offeringGuyAddress: null, //if user uses blockchain
        phone: null,
        email: null,
        currency: [
            { value: null, text: 'please select currency'},
            { value: 'USD ', text: 'US Dollar'},
            { value: 'Euro ', text: 'Euro'},
            { value: 'NTD ', text: 'New Taiwan Dollar'},
            { value: 'Peso ', text: 'Mexico Peso'},
        ],
        currencyChoose: null, //showing currecy type
        amountMoney: "", //showing amount of money
        itemChoose: null,
        //here I use weird term, but I actually mean the intention
        itemMoney: [
            { value: null, text: 'please select'},
            { value: 'Support Artist', text: 'Support Artist'},
            { value: 'Collaboration', text: 'Collaboration'},
            { value: 'investment', text: 'investment'},
        ], 
        //artist choosing
        artistNumber: null,
        artistChoose: null,
        //transaction date
        transactionDate: '', 
        min: minDate,
        max: maxDate,
        description: '',

        transactionStatus: null, //showing transaction status, triggered by function "transactionButton"
        dbArray: [], //upload database here to generate artist name


        //share number parameter
        decidedShare: null,
        
        //blockchain fee
        processFee: '2',
        amount: 0,
        inputName: null,
    }
  },
  created () {
      //here we load the filename within storageList onto dbArray
      let count = storageList.length;
      while (count--) {
      this.dbArray.push(storageList[count])
      }
  },
  beforeMount() {
    participantBox.methods.returnAllParticipants().call().then((participants) => {
      this.amount = participants.length;
    });
  },
  methods: {
    blockchainToggle() {
        if (this.blockchainDeicision == false) {
            this.optAnswer = "No, I DON'T want to use blockchain"
        }
        if (this.blockchainDeicision == true) {
            this.optAnswer = "Yes, I confirm to use blockchain"
        }
    },
    transactionButton () {
        if(this.email == null) {
          alert('Please at least leave E-mail');
          return;
        }
        if (this.currency == null) {
          alert('Please choose currency you use');
          return;
        }
        if (Number(this.minimumShare) < 0 || Number(this.minimumShare) == 0 || this.amountMoney == null) {
          alert ('Please tell artist how much money you send')
          return;
        }
        if (this.artistChoose == null) {
          alert ('Please select one artist')
          return;
        }
        this.transactionStatus = "You have left information in blockchain"
    },



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
        // both 'averageShareMethod' and 'randomShareMethod' have been changed to 'noAnswer' and 'yesAnswer'
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
  margin-top: 30px; 
  margin-bottom: 30px;
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
