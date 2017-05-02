import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello';

Vue.use(Router);
const Goods = {template: '<div>goods</div>'};
const Ratings = {template: '<div>ratings</div>'};
const Seller = {template: '<div>seller</div>'};
const routes = [
  {
    path: '/goods',
    // name: 'Hello',
    component: Goods
  },
  {
    path: '/ratings',
    // name: 'Hello',
    component: Ratings
  },
  {
    path: '/seller',
    // name: 'Hello',
    component: Seller
  }
];
export default new Router({
  routes
});
