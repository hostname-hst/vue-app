// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'


import 'lib-flexible'
import Request from './libs/request';
import Mint from 'mint-ui';
import qs from 'qs'
import Axios from 'axios';
Vue.use(Mint);
import 'mint-ui/lib/style.css';
import {router} from './router' 
import App from './App'
Vue.config.productionTip = false
Vue.prototype.$http = Request;
Vue.prototype.qs = qs;

Axios.defaults.headers.common['Authentication-Token'] = localStorage.getItem('token')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
