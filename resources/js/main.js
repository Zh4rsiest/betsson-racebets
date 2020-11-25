// // import bootstrap from 'bootstrap';
import Vue from 'vue/dist/vue.esm.js';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.use(VueRouter);

const navbar = Vue.component('navbar', require('./components/Navbar.vue').default);
const login = Vue.component('login', require('./components/Login.vue').default);
const faq = Vue.component('faq', require('./components/Faq.vue').default);
const terms = Vue.component('terms', require('./components/Terms.vue').default);

const routes = [
  // { path: '/profile/:unique_id', component: profile },
  { path: '/login', component: login },
  { path: '/faq', component: faq },
  { path: '/terms', component: terms },
  { path: '/', component: login },
  { path: '*', component: login },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

const store = new Vuex.Store({
  state: {
    darkMode: false
  },
  mutations: {
    darkMode(state) {
      document.documentElement.classList.toggle('dark');
      state.darkMode = !state.darkMode;
    }
  }
});

const app = new Vue({
    el: '#app',
    router,
    store,
}).$mount('#app');
