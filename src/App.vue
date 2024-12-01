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

const sharedState = reactive({
  date: "",
  address: "",
  content: "",
});

// 상태를 모든 하위 컴포넌트에 전달
provide("sharedState", sharedState);
</script>

<style scoped></style>
