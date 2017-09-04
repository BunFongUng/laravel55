
import Vue from 'vue';
import VueRouter from 'vue-router';
import  VueAxios from 'vue-axios';
import axios from 'axios';
import App from './App.vue';
import Example from './components/Example.vue';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const routes = [
    {
        name: 'Example',
        path: '/',
        component: Example
    }
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue(Vue.util.extend({ router }, App)).$mount('#app');