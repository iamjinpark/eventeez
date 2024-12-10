// main.js
import { createApp } from "vue";
import "@/style/style.css";
import App from "./App.vue";
import router from "./router/router";
import { MotionPlugin } from "@vueuse/motion";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import "vuetify/styles"; // Vuetify 기본 스타일
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

const pinia = createPinia();

createApp(App).use(pinia).use(MotionPlugin).use(router).use(vuetify).mount("#app");
