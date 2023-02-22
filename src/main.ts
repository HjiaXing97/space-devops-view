import { createApp } from "vue";
import ElementPlus from "element-plus";
import { createPinia } from "pinia";
import "element-plus/dist/index.css";
import App from "@/App.vue";
import router from "router/index.ts";

const pinia = createPinia();
const app = createApp(App);
//
app.use(pinia).use(router).use(ElementPlus).mount("#app");
