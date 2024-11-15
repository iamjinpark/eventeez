import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(""),
  routes: [
    {
      name: "root",
      path: "/",
      component: () => import("@/layout/MainTemplate.vue"),
      children: [
        {
          name: "opening",
          path: "",
          component: () => import("@/components/pages/Opening.vue"),
        },
        {
          name: "home",
          path: "/home",
          component: () => import("@/components/pages/Home.vue"),
        },
        {
          name: "gallery",
          path: "/gallery",
          component: () => import("@/components/pages/Gallery.vue"),
          children: [
            {
              name: "imageDetail",
              path: ":id",
              component: () => import("@/components/pages/ImageDetail.vue"),
              props: true,
            },
          ],
        },
        {
          path: "make",
          redirect: "/make/date", // make로 이동 시 date로 리다이렉트
          children: [
            {
              name: "date",
              path: "date",
              component: () => import("@/components/pages/Date.vue"),
            },
            {
              name: "address",
              path: "address",
              component: () => import("@/components/pages/Address.vue"),
            },
            {
              name: "content",
              path: "content",
              component: () => import("@/components/pages/Content.vue"),
            },
            {
              name: "preview",
              path: "preview",
              component: () => import("@/components/pages/Preview.vue"),
            },
          ],
        },
        {
          name: "invitation",
          path: "/invitation",
          component: () => import("@/components/pages/Invitation.vue"),
        },
        {
          name: "ui",
          path: "/ui",
          component: () => import("@/components/pages/ui.vue"),
        },
      ],
    },
  ],
});

export default router;
