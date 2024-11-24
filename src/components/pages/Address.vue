<template>
  <div class="w-[330px] flex flex-col items-center py-4">
    <img src="/step2.png" alt="주소 입력" class="pb-4" />
    <div class="relative flex flex-col gap-4">
      <OverlayImageInput :imageId="currentImageId" />
      <CustomButton size="large" @click="goToContent">Next</CustomButton>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import CustomButton from "@/components/atoms/CustomButton.vue";
import OverlayImageInput from "@/components/molecules/OverlayImageInput.vue";

const route = useRoute();
const router = useRouter();

// URL에서 ID 추출
const currentImageId = route.params.id;

// 세션 스토리지에서 값 가져오기
const sessionDate = sessionStorage.getItem("date");
console.log("Session Date:", sessionDate); // 디버깅 용

function goToContent() {
  if (address.value.trim()) {
    sessionStorage.setItem("address", address.value);
  } else {
    console.error("address is empty!");
  }
  router.push({ name: "content", params: { id: currentImageId } });
}
</script>

<style lang="scss" scoped></style>
