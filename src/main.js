// main.js
import { createApp } from "vue";
import "@/style/style.css";
import App from "./App.vue";
import router from "./router/router";
import { MotionPlugin } from "@vueuse/motion";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App).use(pinia).use(MotionPlugin).use(router).mount("#app");
