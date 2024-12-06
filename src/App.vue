<template>
  <div class="h-dvh pt-[50px]">
    <Header />
    <MainTemplate />
    <Footer />
  </div>
</template>

<script setup>
import MainTemplate from "@/layout/MainTemplate.vue";
import Header from "@/layout/Header.vue";
import Footer from "@/layout/Footer.vue";
import { reactive, provide } from "vue";
import { useRouter } from "vue-router";

const sharedState = reactive({}); // 이미지 ID별 상태 관리

// 특정 이미지 ID의 상태 초기화 함수
const resetSharedState = (id) => {
  sharedState[id] = {
    date: "",
    address: "",
    content: "",
  };
};

// Vue Router 사용
const router = useRouter();

// 라우터 전환 시 상태 초기화
router.beforeEach((to, from, next) => {
  const imageId = Number(to.params.id); // 현재 이동하려는 이미지 ID
  if (to.name === "make" && !sharedState[imageId]) {
    resetSharedState(imageId); // 해당 이미지 ID의 상태 초기화
  }
  next();
});

// 상태와 초기화 함수를 모든 하위 컴포넌트에 전달
provide("sharedState", sharedState);
provide("resetSharedState", resetSharedState);
</script>
