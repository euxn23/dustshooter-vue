import Vue from 'vue';
import VueCompotisionApi from '@vue/composition-api';
import Dustshooter from '@/components/dustshooter/dustshooter.vue';

Vue.config.productionTip = false;
Vue.use(VueCompotisionApi);

new Vue({
  render: h => h(Dustshooter)
}).$mount('#app');
