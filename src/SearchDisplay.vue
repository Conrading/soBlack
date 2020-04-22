<template>
    <b-container>
        <div>
        <!--virtual-list :size="40" :remain="8">
            <div v-for="i in 20" :key="i">
                <span class="carousel-text">guess{{i}}</span>
            <b-img-lazy v-bind="mainProps" :src="getImageUrl()" ></b-img-lazy>
            <li>沒人知道接下來這個世界會變成怎樣，我們只能盡心盡力的做，盡心盡力的活著，維護一切，守住一切，期許明天會更好，希望燦爛明日依舊</li>
            </div>
        </virtual-list-->
            <div v-show="isShowView">
                <virtual-list class="list scroll-touch"
                :size="50"
                :keeps="30"
                :item-class="'list-item-fixed'"

                :data-key="'id'"
                :data-sources="items"
                :data-component="itemComponent"
                    />
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

import Item from './Item'
import virtualList from 'vue-virtual-scroll-list'
import salesline from './line/salesline'
import salestitle from './line/salestitle'
import { TAB_TYPE, DEFAULT_TAB } from './line/const'
//import './assets/mymainstyles.less'

const DataItems = []
let count = 17 // if we change the number, we should also change in salesline and salestitle
while (count--) {
    const index = 17 - count
    DataItems.push({
        index,
        name: salestitle[index - 1],
        line: salesline[index - 1],
    })
}


export default {
    name: 'SearchDisplay',
    data () {
        return {
            items: DataItems,
            itemComponent: Item, //still need to update Item.vue 
            isShowView: DEFAULT_TAB === TAB_TYPE.VIEW
        }
    },
    components: {
        'virtual-list': virtualList
    },
    methods: {
/*
      getImageUrl() {
        var imageId;
        for (imageId = 0; imageId < 3; imageId++) {
            return `./storage/photo_${imageId}.jpg`
        }
      }
*/
    }
}


</script>
<style lang="less">
.targetProject {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; 
}
.list {
  width: 100%;
  height: 500px;
  border: 2px solid;
  border-radius: 3px;
  overflow-y: auto;
  border-color: dimgray;
  .list-item-fixed {
    display: flex;
    align-items: center;
    padding: 0 1em;
    height: 60px;
    border-bottom: 1px solid;
    border-color: lightgray;
  }
}
</style>

