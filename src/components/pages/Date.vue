<template>
  <div class="w-[330px] flex flex-col items-center py-4">
    <img src="/step1.png" alt="날짜 입력" class="pb-4" />
    <div class="relative flex flex-col gap-4">
      <OverlayImageInput :imageId="currentImageId" />
      <CustomButton size="large" @click="goToAddress">Next</CustomButton>
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

function goToAddress() {
  if (date.value.trim()) {
    // 로컬 스토리지에 저장
    sessionStorage.setItem("date", date.value);
  } else {
    console.error("Date input is empty!");
  }

  router.push({ name: "address", params: { id: currentImageId } });
}
</script>
