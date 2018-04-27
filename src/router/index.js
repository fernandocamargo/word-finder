import Vue from 'vue';
import router from 'vue-router';

import home from '@/components/pages/home';
import results from '@/components/pages/results';

Vue.use(router);

export default new router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/unscramble/:word',
      name: 'results',
      component: results,
    },
  ],
});
