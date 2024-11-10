import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/pages/Home.vue";
import Type from "@/components/pages/Type.vue";
import EziType from "@/components/pages/EziType.vue";
import YongType from "@/components/pages/YongType.vue";
import Form from "@/components/pages/Form.vue";
import Invitation from "@/components/pages/Invitation.vue";
import Preview from "@/components/pages/Preview.vue";

const router = createRouter({
  history: createWebHistory(""),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/form",
      name: "form",
      component: Form,
    },
    {
      path: "/type",
      name: "type",
      component: Type,
    },
    {
      path: "/eziType",
      name: "eziType",
      component: EziType,
    },
    {
      path: "/yongType",
      name: "yongType",
      component: YongType,
    },
    {
      path: "/preview",
      name: "preview",
      component: Preview,
    },
    {
      path: "/invitation",
      name: "invitation",
      component: Invitation,
    },
  ],
});

export default router;
