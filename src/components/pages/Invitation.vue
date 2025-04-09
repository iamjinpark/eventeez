<template>
  <div class="w-[330px] flex flex-col items-center justify-center py-6 gap-6">
    <div class="w-full h-[410px]">
      <img :src="image" alt="Invitation Preview" />
    </div>
    <div class="flex flex-col gap-4">
      <CustomButton size="large" @click="copyShareLink" style="background-color: black; color: white">Link to Share</CustomButton>
      <div class="flex gap-3">
        <CustomButton size="small" @click="downloadImage">Download JPG</CustomButton>
        <CustomButton size="small" @click="moveToHome">Try Again</CustomButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import CustomButton from "@/components/atoms/CustomButton.vue";

const route = useRoute();
const router = useRouter();

// URL 쿼리로 전달된 Base64 이미지 데이터
const image = route.query.image;

// 이미지 다운로드 함수
const downloadImage = () => {
  if (image) {
    // Base64 데이터를 Blob으로 변환
    const base64Data = image.split(",")[1]; // Data URL에서 Base64 데이터 추출
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length).fill(null).map((_, i) => byteCharacters.charCodeAt(i));
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "image/jpeg" });

    // Blob을 다운로드 링크로 변환
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "invitation.jpg"; // 다운로드될 파일 이름 설정
    link.click();

    // 메모리 정리
    URL.revokeObjectURL(link.href);
  } else {
    console.error("No image data available for download.");
  }
};

// 공유 링크 복사 함수
const copyShareLink = () => {
  if (image) {
    const currentUrl = window.location.origin;
    const shareUrl = `${currentUrl}/share?image=${encodeURIComponent(image)}`;
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        alert("링크가 복사되었습니다!");
      })
      .catch((err) => {
        console.error("링크 복사 실패:", err);
      });
  } else {
    console.error("No image data available for sharing.");
  }
};

const moveToHome = () => {
  router.push("/home");
};
</script>
