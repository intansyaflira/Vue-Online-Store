import { createApp } from 'vue'
import App from './components/App.vue'
import axios from 'axios'

import {createWebHistory, createRouter} from 'vue-router';
import Home from './components/Home.vue';
import Pelanggan from './components/Pelanggan.vue';
import TambahPelanggan from './components/TambahPelanggan.vue';
import EditPelanggan from './components/EditPelanggan.vue';
import Product from './components/Product.vue';
import TambahProduct from './components/TambahProduct.vue';
import EditProduct from './components/EditProduct.vue';
import Login from './components/Login.vue';

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path: '/', name: "Home", component : Home},
        {path: '/pelanggan', name: "Pelanggan", component : Pelanggan},
        {path: '/pelanggan/TambahPelanggan', name: "TambahPelanggan", component: TambahPelanggan},
        {path: '/pelanggan/EditPelanggan/:id', name: "EditPelanggan", component: EditPelanggan},
        {path: '/product', name: "Product", component : Product},
        {path: '/product/TambahProduct', name: "TambahProduct", component: TambahProduct},
        {path: '/product/EditProduct/:id', name: "EditProduct", component: EditProduct},
        {path: '/login', name: "Login", component: Login},
    ],
    base : '/'
});

const app = createApp(App)
app.use(router)
app.config.globalProperties.axios = axios //agar axios bisa terbaca&digunakan
app.mount("#app")


