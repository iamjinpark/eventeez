<template>
  <div v-if="image" class="w-full">
    <!-- 입력 필드: 현재 라우트에 해당하는 필드만 표시 -->
    <div
      v-if="route.name !== 'preview'"
      v-for="(value, key) in filteredFields"
      :key="`${key}-input`"
      class="mb-4"
    >
      <!-- Date Input 조건부 렌더링 -->
      <DateInput
        v-if="key == 'date'"
        v-model="currentFields[key]"
        :placeholder="`set a ${key}`"
      />

      <!-- 일반 입력 필드 -->
      <v-text-field
        v-else="key !== 'date'"
        variant="solo-filled"
        v-model="currentFields[key]"
        :id="key"
        type="text"
        :placeholder="`set a ${key}`"
        autocomplete="off"
        class="w-full h-[60px]"
        :maxlength="fieldMaxLengths[key]"
      ></v-text-field>
    </div>

    <div class="relative w-[330px] h-[410px]">
      <img :src="image.src" class="w-full h-full object-cover" />

      <!-- 텍스트 오버레이 -->
      <div
        v-for="(value, key) in currentFields"
        :key="key"
        :style="getFieldStyle(key)"
        class="absolute pointer-events-none"
      >
        {{ value || " " }}
      </div>
    </div>
  </div>
  <div v-else>
    <p>Image not found.</p>
  </div>
</template>

<script setup>
import { inject, computed, ref, onMounted, watch } from "vue";
import { imageData } from "@/data/imageData.js";
import { useRoute } from "vue-router";
import DateInput from "../atoms/DateInput.vue";
import { injectFontLinks } from "@/utils/fontUtils.js";

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
  const maxHeights = {
    date: "30px",
    address: "36px",
    content: "60px",
  };

  return {
    position: "absolute",
    top: field.position?.top || "0px",
    left: field.position?.left || "0px",
    fontSize: field.fontSize || "16px",
    fontFamily: field.fontFamily || "Arial, sans-serif",
    color: field.color || "black",
    fontWeight: field.fontWeight || "normal",
    width: "auto",
    maxWidth: "220px",
    maxHeight: maxHeights[fieldName] || "20px",

    whiteSpace: "pre-wrap", // ← 줄바꿈 허용
    wordBreak: "break-word", // ← 단어가 길어도 줄바꿈
    lineHeight: field.fontSize || "16px",
  };
};

// 입력시 글자수 제한
const getMaxCharCount = (fieldName, fontSize = "16px") => {
  const heightPx =
    {
      date: 30,
      address: 36,
      content: 60,
    }[fieldName] || 20;

  const size = parseFloat(fontSize);
  const lines = Math.floor(heightPx / size);
  const charsPerLine = 18;

  return lines * charsPerLine;
};

const fieldMaxLengths = computed(() => {
  if (!image.value) return {};

  const result = {};
  const fieldNames = ["date", "address", "content"];

  fieldNames.forEach((fieldName) => {
    const fontSize = image.value[fieldName]?.fontSize || "16px";
    result[fieldName] = getMaxCharCount(fieldName, fontSize);
  });

  return result;
});

// 폰트 링크 삽입
onMounted(() => {
  if (image.value?.fontLinks) {
    injectFontLinks(image.value.fontLinks);
  }
});
</script>
