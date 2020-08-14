import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFoundComponent from "../components/NotFoundComponent";
import lkPage from "../components/lkPage";
import OrderCreation from "../components/OrderCreation";

Vue.use(VueRouter);

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/clients', name: 'clients', component: Home},
    {path: '/kuryeram', name: 'kuryeram', component: Home},
    {path: '/about', name: 'about', component: Home},
    {path: '/contacts', name: 'contacts', component: Home},
    {path: '/price', name: 'price', component: Home},
    {path: '/help', name: 'help', component: Home},

    {path: '/profile', name: 'profile', component: lkPage},
    {path: '/orders', name: 'orders', component: lkPage},
    {path: '/balance-detail', name: 'balanceDetail', component: lkPage},
    {path: '/bill', name: 'bill', component: lkPage},
    {path: '/documents', name: 'documents', component: lkPage},
    {path: '/balance', name: 'balance', component: lkPage},
    {path: '/partnership', name: 'partnership', component: lkPage},
    {path: '/treatment', name: 'treatment', component: lkPage},
    {path: '/settings', name: 'settings', component: lkPage},
    {path: '/order', name: 'order', component: OrderCreation},

    { path: '*', component: NotFoundComponent }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
