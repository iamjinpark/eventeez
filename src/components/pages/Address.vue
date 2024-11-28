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

function goToContent() {
  router.push({ name: "content", params: { id: currentImageId } });
}
</script>

<style lang="scss" scoped></style>
