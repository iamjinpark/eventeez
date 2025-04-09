<!-- SharePage.vue -->
<template>
  <div class="w-[330px] flex flex-col items-center justify-center py-6 gap-6">
    <div class="w-full h-[410px]">
      <img :src="image" alt="Shared Invitation" />
    </div>
    <p class="text-center text-gray-500">이 이미지는 공유된 링크에서 표시됩니다.</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const image = route.query.image;

if (!image) {
  console.error("No image data found in the URL query.");
}
</script>
