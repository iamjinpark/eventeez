<template>
  <div class="w-[330px] flex flex-col items-center">
    <img src="/step3.png" alt="내용 입력" class="py-4" />
    <div class="relative flex flex-col gap-4">
      <OverlayImageInput :imageId="currentImageId" />
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

// 세션 스토리지에서 값 가져오기
const sessionDate = sessionStorage.getItem("date");
const sessionAddress = sessionStorage.getItem("address");

function goToPreview() {
  if (content.value.trim()) {
    sessionStorage.setItem("content", content.value);
  } else {
    console.error("content is empty!");
  }

  router.push({ name: "preview", params: { id: currentImageId } });
}
</script>

<style lang="scss" scoped></style>
