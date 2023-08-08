import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Gunung from "../views/Gunung.vue"
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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;