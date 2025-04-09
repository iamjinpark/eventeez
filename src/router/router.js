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
          name: "make",
          path: "/make/:id",
          component: () => import("@/components/pages/Make.vue"),
          props: true, // id를 컴포넌트로 전달
          children: [
            {
              name: "date",
              path: "date",
              component: () => import("@/components/pages/Date.vue"),
              props: true,
            },
            {
              name: "address",
              path: "address",
              component: () => import("@/components/pages/Address.vue"),
              props: true,
            },
            {
              name: "content",
              path: "content",
              component: () => import("@/components/pages/Content.vue"),
              props: true,
            },
            {
              name: "preview",
              path: "preview",
              component: () => import("@/components/pages/Preview.vue"),
              props: true,
            },
          ],
        },
        {
          name: "invitation",
          path: "/invitation",
          component: () => import("@/components/pages/Invitation.vue"),
        },
        {
          name: "share",
          path: "/share",
          component: () => import("@/components/pages/ShareInvitation.vue"),
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
