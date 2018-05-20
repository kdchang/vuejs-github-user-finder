import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/containers/Home';
import UserDetail from '@/containers/UserDetail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/user/:githubId',
      name: 'UserDetail',
      component: UserDetail,
    },
  ],
});
