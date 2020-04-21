import Vue from 'vue'
import Homepage from './Homepage.vue'

import 'video.js/dist/video-js.css'
import Video from 'video.js'
import router from './router';
import vuescroll from 'vuescroll';
Vue.use(vuescroll);


import axios from 'axios'
Vue.prototype.$axios = axios

Vue.prototype.$video = Video
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Homepage),
}).$mount('#app')
