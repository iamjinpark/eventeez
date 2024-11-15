<template>
  <div class="w-full flex flex-col items-center">
    <div class="py-6 text-center">
      <p class="text-xl font-bold">Choose Design Type!</p>
      <p>원하는 디자인을 고르세요</p>
    </div>
    <div class="grid grid-cols-2 gap-4 mb-[25px]">
      <GalleryCard
        v-for="image in images"
        :key="image.id"
        :image="image"
        :alt="image.alt"
        @click="openImageDetail(image.id)"
      />
    </div>
    <router-view />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import GalleryCard from "../atoms/GalleryCard.vue";
import { imageData } from "@/data/imageData.js";

const router = useRouter();
const images = imageData;

function openImageDetail(id) {
  router.push({ name: "imageDetail", params: { id } });
}
</script>

<style lang="scss" scoped></style>
