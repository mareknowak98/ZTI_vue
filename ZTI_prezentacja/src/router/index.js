import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PostExample from "../views/PostExample.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/PostExample",
        name: "PostExample",
        component: PostExample,

    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;