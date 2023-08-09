import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Gunung from "../views/Gunung.vue";
import Produk from "../views/Produk.vue";
import SingleProduk from "../views/SingleProduk.vue"
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/users",
        name: "User",
        component: User,
    },
    {
        path: "/gunung",
        name: "Gunung",
        component: Gunung,
    },
    {
        path: "/produk",
        name: "Produk",
        component: Produk,
    },
    {
        path: "/produk/:id",
        name: "SingleProduk",
        component: SingleProduk,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;