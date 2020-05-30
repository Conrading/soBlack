import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '../Homepage.vue';
//import SearchDisplay from '../SearchDisplay.vue';
import LoadPage from '../LoadPage'
import PlayerParameter from '../PlayerParameter'
//import FilePlayer from '../FilePlayer';
import Uploading from '../Uploading';
//import BlockchainHere from '../BlockchainHere';
import Blank from '../Blank';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LoadPage',
      component: LoadPage,
    },
    {
      path: '/Homepage',
      name: 'Homepage',
      component: Homepage,
      children: [
        {
          path: '',
          name: 'Homepage',
          component: PlayerParameter,
        },
        {
          path: 'PlayerParameter',
          name: 'PlayerParameter',
          component: PlayerParameter,
        },
        {
          path: 'Uploading',
          name: 'Uploading',
          component: Uploading,
        }
      ]
    },
    /*
    {
      path: '/FilePlayer',
      name: 'FilePlayer',
      component: FilePlayer,
    },
    {
      path: '/SearchDisplay',
      name: 'SearchDisplay',
      component: SearchDisplay,
    },
    {
      path: '/BlockchainHere',
      name: 'BlockchainHere',
      component: BlockchainHere,
    },
    */
    {
      path: '/Blank',
      name: 'Blank',
      component: Blank,
      meta: {requireAuth: true},
    },
  ],
});