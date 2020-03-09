import Vue from 'vue';
import Router from 'vue-router';
import Main from '../Main'
import PlayerParameter from '../PlayerParameter'
import FilePlayer from '../FilePlayer';
import Uploading from '../Uploading';
import BlockchainHere from '../BlockchainHere';
import Blank from '../Blank';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Main',
      name: 'Main',
      component: Main,
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