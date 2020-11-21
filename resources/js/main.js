// // import bootstrap from 'bootstrap';
import Vue from 'vue/dist/vue.esm.js';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const navbar = Vue.component('navbar', require('./components/Navbar.vue').default);
const login = Vue.component('login', require('./components/Login.vue').default);

const routes = [
  // { path: '/profile/:unique_id', component: profile },
  { path: '/login', component: login },
  { path: '/', component: login },
  { path: '*', component: login },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

const app = new Vue({
    el: '#app',
    router,
}).$mount('#app');
