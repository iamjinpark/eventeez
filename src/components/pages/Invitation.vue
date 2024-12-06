<template>
  <div class="w-[330px] flex flex-col items-center justify-center py-6 gap-6">
    <div class="w-full h-[410px]">
      <img :src="image" alt="Invitation Preview" />
    </div>
    <div class="flex flex-col gap-4">
      <CustomButton size="large" @click="handleNext" style="background-color: black; color: white">Link to Share</CustomButton>
      <div class="flex gap-3">
        <CustomButton size="small" @click="handleNext">Download JPG</CustomButton>
        <CustomButton size="small" @click="handleNext">Try Again</CustomButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import CustomButton from "@/components/atoms/CustomButton.vue";

const route = useRoute();

// URL 쿼리로 전달된 Base64 이미지 데이터
const image = route.query.image;
</script>

<style scoped>
/* 필요에 따라 스타일을 추가 */
</style>
