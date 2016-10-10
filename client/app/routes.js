import Vue from 'vue';
import Router from 'vue-router';

import config from './config';
window.config = config;

import Content from './components/Content/Content.vue';
import SearchContent from './components/Content/SearchContent.vue';
import Settings from './components/Content/Settings.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: config.uri,
  routes: [
    { path: '/', component: Content },
    { path: '/search', component: SearchContent },
    { path: '/settings', component: Settings },
    { path: '*', component: Content }
  ]
});