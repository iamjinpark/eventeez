<template>
  <div v-if="image" class="relative w-full">
    <!-- 이미지 -->
    <img :src="image.src" :alt="image.alt" class="object-cover w-full h-[410px]" />

    <!-- 텍스트 오버레이 -->
    <div v-for="(field, key) in filteredFields" :key="key" :style="getFieldStyle(key)" class="pointer-events-none">
      {{ field.value || " " }}
      <!-- 입력값 표시 -->
    </div>

    <!-- 입력 필드 -->
    <div v-for="(field, key) in filteredFields" :key="`${key}-input`" class="mt-4">
      <label :for="key" class="sr-only">{{ key }}</label>
      <input
        v-model="field.value"
        :id="key"
        :type="field.type || 'text'"
        :placeholder="`Enter ${key}`"
        class="w-full h-[65px] border-[1px] border-black bg-gray-100 text-center"
        @focus="handleFocus($event.target)"
      />
    </div>
  </div>
  <div v-else>
    <p>Image not found.</p>
  </div>
</template>

<script setup>
import { reactive, computed, onMounted } from "vue";
import { imageData } from "@/data/imageData.js";
import { useRoute } from "vue-router";

const route = useRoute();
const imageId = Number(route.params.id); // route.params.id를 숫자로 변환

// 특정 ID의 이미지 데이터 가져오기
const image = computed(() => {
  const foundImage = imageData.find((img) => img.id === imageId);
  if (!foundImage) {
    console.error(`Image with ID ${imageId} not found.`);
  }
  return foundImage || null;
});

// 옵션 데이터 - reactive로 설정
const imageOption = reactive(
  image.value
    ? {
        date: { ...image.value.date, value: "" },
        time: { ...image.value.time, value: "" },
        address: { ...image.value.address, value: "" },
        content: { ...image.value.content, value: "" },
      }
    : {}
);

// 현재 페이지에 따라 렌더링할 필드 결정
const filteredFields = computed(() => {
  const currentPage = route.name; // 현재 라우트 이름
  const fields = {
    date: ["date"],
    address: ["address"],
    content: ["content"],
    time: ["time"],
  };

  // 현재 페이지와 관련된 필드만 필터링
  const activeFields = fields[currentPage] || [];
  return Object.keys(imageOption)
    .filter((key) => activeFields.includes(key))
    .reduce((result, key) => {
      result[key] = imageOption[key];
      return result;
    }, {});
});

// 특정 필드에 맞는 스타일 반환
const getFieldStyle = (fieldName) => {
  const field = imageOption[fieldName];
  if (!field) return {};
  return {
    position: "absolute",
    top: field.position?.top || "0px",
    left: field.position?.left || "0px",
    fontSize: field.fontSize || "16px",
    fontFamily: field.fontFamily || "Arial, sans-serif",
    color: field.color || "black",
  };
};

// 입력 필드 포커스 시 스크롤
const handleFocus = (inputRef) => {
  activeInputRef.value = inputRef; // 현재 활성화된 입력 필드 설정
  setTimeout(() => {
    inputRef.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 200); // 키보드 활성화를 기다림
};

// 키보드 활성화 시 입력 필드가 가려지는지 확인
onMounted(() => {
  window.addEventListener("resize", () => {
    if (activeInputRef.value) {
      activeInputRef.value.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
});
</script>
