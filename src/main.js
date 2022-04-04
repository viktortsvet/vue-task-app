import Vue from 'vue';
import Application from './Application';
import router from './router'
import store from './store';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(Application)
}).$mount('#app');