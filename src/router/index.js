import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '../Homepage.vue';
import SearchDisplay from '../SearchDisplay.vue';
import ButtonBottom from '../ButtonBottom'
import PlayerParameter from '../PlayerParameter'
import FilePlayer from '../FilePlayer';
import Uploading from '../Uploading';
import BlockchainHere from '../BlockchainHere';
import Blank from '../Blank';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/SearchDisplay',
      name: 'SearchDisplay',
      component: SearchDisplay,
    },
    {
      path: '/Homepage',
      name: 'Homepage',
      component: Homepage,
    },
    {
      path: '/ButtonBottom',
      name: 'ButtonBottom',
      component: ButtonBottom,
    },
    {
      path: '/FilePlayer',
      name: 'FilePlayer',
      component: FilePlayer,
    },
    {
      path: '/PlayerParameter',
      name: 'PlayerParameter',
      component: PlayerParameter,
    },
    {
      path: '/Uploading',
      name: 'Uploading',
      component: Uploading,
    },
    {
      path: '/BlockchainHere',
      name: 'BlockchainHere',
      component: BlockchainHere,
    },
    {
      path: '/Blank',
      name: 'Blank',
      component: Blank,
    },
  ],
});