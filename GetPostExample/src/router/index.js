import Vue from "vue";
import VueRouter from "vue-router";
import PostExample from "../views/PostExample.vue";
import GetExample from "../views/GetExample.vue";
import VuexExample from "../views/VuexExample.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "GetExample",
        component: GetExample,
    },
    {
        path: "/PostExample",
        name: "PostExample",
        component: PostExample,

    },
    {
        path: "/VuexExample",
        name: "VuexExample",
        component: VuexExample,

    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;