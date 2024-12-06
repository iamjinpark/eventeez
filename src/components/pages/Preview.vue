<template>
  <div class="w-[330px] flex flex-col items-center py-4">
    <img src="/step4.png" alt="날짜 입력" class="pb-4" />
    <div class="relative flex flex-col gap-6">
      <div ref="imageContainer">
        <OverlayImageInput :imageId="currentImageId" />
      </div>
      <div class="text-center text-xl font-extrabold">
        <div>wait!</div>
        <div>Truly the final, final?</div>
      </div>
      <CustomButton size="large" @click="handleNext">yes!</CustomButton>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import html2canvas from "html2canvas";
import CustomButton from "@/components/atoms/CustomButton.vue";
import OverlayImageInput from "@/components/molecules/OverlayImageInput.vue";
import { inject, ref, nextTick } from "vue";

const route = useRoute();
const router = useRouter();
const imageContainer = ref(null);

// URL에서 ID 추출
const currentImageId = route.params.id;

// 상태 관리 (sharedState 초기화용)
const sharedState = inject("sharedState");
const resetSharedState = inject("resetSharedState");

async function handleNext() {
  if (imageContainer.value) {
    try {
      // Vue의 DOM 렌더링 완료 후 실행
      await nextTick();

      // HTML2Canvas로 캡처
      const canvas = await html2canvas(imageContainer.value, {
        scale: 2, // 고해상도 캡처
        logging: true, // 디버깅 활성화
        width: 330, // 캡처할 출력의 너비
        height: 410, // 캡처할 출력의 높이
      });
      const imageData = canvas.toDataURL("image/png");

      // 상태 초기화
      resetSharedState(currentImageId);

      // Invitation 페이지로 Base64 이미지 전달
      router.push({
        name: "invitation",
        query: { image: imageData },
      });
    } catch (error) {
      console.error("Failed to generate image:", error);
    }
  }
}
</script>

<style lang="scss" scoped></style>
