import { createApp } from "vue";
import "@/style/style.css";
import App from "./App.vue";
import { createMetaManager } from "vue-meta";

createApp(App).use(createMetaManager()).mount("#app");
