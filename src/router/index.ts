import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("views/Home/Home.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
