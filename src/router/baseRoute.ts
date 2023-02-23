import type { RouteRecordRaw } from "vue-router";

const baseRoute: RouteRecordRaw[] = [
  {
    path: "/customer-manage",
    name: "CustomerManage",
    component: () => import("views/customer-manage/index.vue"),
    meta: {
      title: "客户管理"
    }
  },
  {
    path: "/repository-manage",
    name: "RepositoryManage",
    component: () => import("views/repository-manage/index.vue"),
    meta: {
      title: "镜像仓库管理"
    }
  }
];

export default baseRoute;
