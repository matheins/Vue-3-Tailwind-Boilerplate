import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routeOptions = [
  {
    path: "/",
    name: "Home",
    meta: {
      // use meta data to set the layout
      layout: "AppLayoutDefault",
    },
  },
  {
    path: "/about",
    name: "About",
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  //define new routes here
];

// making use of route level code-splitting
const routes: Array<RouteRecordRaw> = routeOptions.map((route) => {
  return {
    ...route,
    component: () =>
      import(/* webpackChunkName: "[request]" */ `@/views/${route.name}.vue`),
  };
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
