
import Vue from 'vue';
import VueRouter from 'vue-router';
import  VueAxios from 'vue-axios';
import axios from 'axios';
import App from './App.vue';
import CreateItem from './components/CreateItem.vue';
import DisplayItems from './components/DisplayItems.vue';
import EditItem from './components/EditItem.vue';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const routes = [
    {
        name: 'DisplayItems',
        path: '/',
        component: DisplayItems
    },
    {
        name: 'CreateItem',
        path: '/items/create',
        component: CreateItem
    },
    {
        name: 'EditItem',
        path: '/items/:id/edit',
        component: EditItem
    }
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue(Vue.util.extend({ router }, App)).$mount('#app');