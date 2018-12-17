// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store.js'
import router from './router'
import AMap from 'vue-amap'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './assets/common.css'
import './assets/style.css'

import {httpPost,httpGet,GLOBALconfig} from './assets/common'

Vue.prototype.$post=httpPost;
Vue.prototype.$get=httpGet;
Vue.prototype.$GLOBALconfig=GLOBALconfig;

Vue.use(ElementUI);
Vue.use(MintUI);
Vue.use(AMap);

Vue.config.productionTip = false

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 申请的高德key
  key: 'e9a0b494cbeaf6c5500f7b35efffd510',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  v: '1.4.4'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
