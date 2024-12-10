<template>
  <div class="fixed inset-0 flex items-center justify-center" style="background-color: rgba(0, 0, 0, 0.7); z-index: 50" @click="closeModal">
    <div v-motion-pop @click.stop class="flex flex-col justify-center items-center gap-6">
      <img :src="image?.src" :alt="image?.alt" class="object-cover w-[300px] h-[370px] relative" />
      <CustomButton @click="goToMakePage">Want to make?</CustomButton>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { useRouter } from "vue-router";
import { imageData } from "@/data/imageData.js";
import CustomButton from "@/components/atoms/CustomButton.vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const router = useRouter();

// 클릭된 이미지 ID에 맞는 이미지 찾기
const image = computed(() => imageData.find((img) => String(img.id) === props.id));

function closeModal() {
  router.push({ name: "gallery" });
}

function goToMakePage() {
  router.push({ name: "date", params: { id: props.id } });
}
</script>

<style scoped></style>
