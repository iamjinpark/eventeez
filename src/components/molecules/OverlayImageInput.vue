<template>
  <div v-if="image" class="relative w-full">
    <!-- 입력 필드: 현재 라우트에 해당하는 필드만 표시 -->
    <div v-if="route.name !== 'preview'" v-for="(value, key) in filteredFields" :key="`${key}-input`" class="mb-4">
      <label :for="key" class="sr-only">{{ key }}</label>

      <!-- Date Input 조건부 렌더링 -->
      <v-text-field v-if="key === 'date'" v-model="currentFields[key]" label="" type="date" class="w-full h-[60px]"></v-text-field>

      <!-- 일반 입력 필드 -->
      <input
        v-else="key !== 'date'"
        v-model="currentFields[key]"
        :id="key"
        type="text"
        :placeholder="`Enter ${key}`"
        autocomplete="off"
        class="w-full h-[60px] border-[1px] border-black bg-gray-100 text-center"
        @focus="handleFocus($event.target)"
      />
    </div>

    <!-- 이미지 -->
    <img :src="image.src" :alt="image.alt" class="object-cover w-full h-[410px]" />

    <!-- 텍스트 오버레이 -->
    <div v-for="(value, key) in currentFields" :key="key" :style="getFieldStyle(key)" class="pointer-events-none">
      {{ value || " " }}
    </div>
  </div>
  <div v-else>
    <p>Image not found.</p>
  </div>
</template>

<script setup>
import { inject, computed, ref, onMounted } from "vue";
import { imageData } from "@/data/imageData.js";
import { useRoute } from "vue-router";

const activeInputRef = ref(null);

// sharedState와 resetSharedState를 inject로 가져오기
const sharedState = inject("sharedState");
const resetSharedState = inject("resetSharedState");

const route = useRoute();
const imageId = Number(route.params.id); // 현재 이미지 ID

// 특정 ID의 이미지 데이터 가져오기
const image = computed(() => {
  const foundImage = imageData.find((img) => img.id === imageId);
  if (!foundImage) {
    console.error(`Image with ID ${imageId} not found.`);
  }
  return foundImage || null;
});

// 현재 ID의 상태를 참조
const currentFields = computed(() => {
  if (!sharedState[imageId]) {
    resetSharedState(imageId); // 해당 ID의 상태가 없으면 초기화
  }
  return sharedState[imageId];
});

// 현재 라우트와 관련된 필드만 필터링
const filteredFields = computed(() => {
  const currentPage = route.name; // 현재 라우트 이름
  const fields = {
    date: ["date"],
    address: ["address"],
    content: ["content"],
    preview: [], // Preview에서는 입력 필드 숨김
  };

  return Object.keys(currentFields.value || {})
    .filter((key) => fields[currentPage]?.includes(key))
    .reduce((result, key) => {
      result[key] = currentFields.value[key];
      return result;
    }, {});
});

// 특정 필드에 맞는 스타일 반환
const getFieldStyle = (fieldName) => {
  if (!image.value || !image.value[fieldName]) return {};
  const field = image.value[fieldName];
  return {
    position: "absolute",
    top: field.position?.top || "0px",
    left: field.position?.left || "0px",
    fontSize: field.fontSize || "16px",
    fontFamily: field.fontFamily || "Arial, sans-serif",
    color: field.color || "black",
    fontWeight: field.fontWeight || "normal",
  };
};

// 입력 필드 포커스 시 스크롤
const handleFocus = (inputRef) => {
  activeInputRef.value = inputRef;
  setTimeout(() => {
    inputRef.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, 200);
};

// 입력 필드가 가려지지 않도록 조정
onMounted(() => {
  window.addEventListener("resize", () => {
    if (activeInputRef.value) {
      activeInputRef.value.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });
});
</script>
