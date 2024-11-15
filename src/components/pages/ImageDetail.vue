<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
    @click="closeModal"
  >
    <div class="flex flex-col justify-center items-center gap-6">
      <img
        :src="image?.src"
        :alt="image?.alt"
        class="object-cover w-[300px] h-[370px] relative"
      />
      <CustomButton @click="goToMakePage">Want to make?</CustomButton>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { useRouter } from "vue-router";
import { imageData } from "@/data/imageData.js";
import CustomButton from "../atoms/CustomButton.vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const router = useRouter();

// 클릭된 이미지 ID에 맞는 이미지 찾기
const image = computed(() =>
  imageData.find((img) => String(img.id) === props.id)
);

function closeModal() {
  router.push({ name: "gallery" });
}

function goToMakePage() {
  router.push("/make");
}
</script>

<style scoped></style>
