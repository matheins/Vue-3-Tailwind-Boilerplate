import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@/assets/tailwind.css";
import i18n from "./i18n";
import AppLayout from "@/layouts/AppLayout.vue";
import registerCommonComponents from "@/plugins/registerCommonComponents";
import api from "@/plugins/api";

createApp(App)
  .use(i18n)
  .use(store)
  .use(router)
  .use(registerCommonComponents)
  .use(api)
  .component("AppLayout", AppLayout)
  .mount("#app");
