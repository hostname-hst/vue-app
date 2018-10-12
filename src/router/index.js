
import Vue from 'vue';
import RouterVue from 'vue-router';
import {routers} from './router';

Vue.use(RouterVue)

// 路由配置
const RouterConfig = {
  routes: routers
};
export const router = new VueRouter(RouterConfig);

