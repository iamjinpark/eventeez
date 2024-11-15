<template>
  <div class="w-[330px] flex flex-col items-center">
    <div class="flex flex-col gap-6">
      <img src="/step1.png" alt="1단계" class="" />
      <img :src="image?.src" :alt="image?.alt" class="object-cover h-[410px]" />

      <div class="pt-[-25px]">
        <label for="date"></label>
        <input
          type="text"
          id="date"
          placeholder="date"
          v-model="date"
          class="w-full h-[65px] border-[1px] border-black bg-gray-100 text-center"
        />
      </div>
      <CustomButton size="large" @click="goToAddress">Next</CustomButton>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { defineProps, computed, ref } from "vue";
import { imageData } from "@/data/imageData.js";
import CustomButton from "@/components/atoms/CustomButton.vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const router = useRouter();

// 입력값 (v-model 바인딩)
const date = ref("");

// 전달받은 id로 이미지 데이터 찾기
const image = computed(() =>
  imageData.find((img) => String(img.id) === props.id)
);

function goToAddress() {
  if (date.value.trim()) {
    // 로컬 스토리지에 저장
    localStorage.setItem("info", date.value);
  } else {
    console.error("Date input is empty!");
  }

  // 다음 페이지로 이동
  router.push({ name: "address", params: { id: props.id } });
}
</script>
