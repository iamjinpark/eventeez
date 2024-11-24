<template>
  <div class="w-[330px] flex flex-col items-center">
    <img src="/step4.png" alt="날짜 입력" class="py-4" />
    <div class="relative flex flex-col gap-6">
      <OverlayImageInput :imageId="currentImageId" />
      <div class="text-center text-2xl font-extrabold">
        <div>wait!</div>
        <div>Truly the final, final?</div>
      </div>
      <CustomButton size="large" @click="goToPreview">Next</CustomButton>
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

function goToPreview() {
  if (content.value.trim()) {
    // 로컬 스토리지에 저장
    sessionStorage.setItem("content", content.value);
  } else {
    console.error("content is empty!");
  }

  router.push({ name: "preview", params: { id: currentImageId } });
}
</script>

<style lang="scss" scoped></style>
