import Vue from 'vue';
import Router from 'vue-router';
import goods from '@/components/goods/goods';
import ratings from '@/components/ratings/ratings';
import seller from '@/components/seller/seller';

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/goods'
  },
  {
    path: '/goods',
    // name: 'Hello',
    component: goods
  },
  {
    path: '/ratings',
    // name: 'Hello',
    component: ratings
  },
  {
    path: '/seller',
    // name: 'Hello',
    component: seller
  }
];
export default new Router({
  routes,
  linkActiveClass: 'active'
});
