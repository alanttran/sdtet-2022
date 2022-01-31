import Vue from "vue";
import Router from "vue-router";
import Live from "./views/live.vue";
import Home from "./views/home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/live",
      component: Live,
    },
  ],
});
