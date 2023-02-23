import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import baseRoute from "./baseRoute.ts";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    redirect: (to) => {
      return { path: "/customer-manage" };
    }
  },
  ...baseRoute
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
