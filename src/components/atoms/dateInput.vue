<template>
  <div>
    <!-- v-menu를 사용하여 Date-picker가 인풋 바로 아래에 위치 -->
    <v-menu v-model="menu" :close-on-content-click="false" transition="scale-transition" :offset="[0, 0]">
      <template #activator="{ props }">
        <!-- 클릭 시 Date-picker를 여는 Text-field -->
        <v-text-field v-bind="props" v-model="formattedDate" variant="solo-filled" hide-details></v-text-field>
      </template>

      <!-- Vuetify Date-picker -->
      <v-card>
        <v-date-picker v-model="selectedDate" @update:model-value="onDateChange" show-adjacent-months></v-date-picker>
        <v-card-actions>
          <v-btn text @click="clearDate">clear</v-btn>
          <v-spacer></v-spacer>
          <v-btn text @click="menu = false">select</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Props 정의
const props = defineProps({
  modelValue: {
    type: [String, Date], // String과 Date 둘 다 허용
    required: true,
  },
});

// Emits 정의
const emit = defineEmits(["update:model-value"]);

// 상태
const menu = ref(false); // Date-picker 메뉴 상태
const selectedDate = ref(new Date(props.modelValue || Date.now())); // 선택된 날짜

// 선택된 날짜를 포맷 변경하여 화면에 표시
const formattedDate = computed(() => {
  if (!selectedDate.value) return "";
  const date = new Date(selectedDate.value);
  // 원하는 포맷으로 변경 (예: DD/MM/YYYY)
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
});

// 날짜 변경 처리
const onDateChange = (newDate) => {
  selectedDate.value = new Date(newDate); // Date 객체로 변환
  emit("update:model-value", newDate); // 부모에 전달
};

// 날짜 초기화
const clearDate = () => {
  selectedDate.value = new Date(); // 기본값: 오늘 날짜
  emit("update:model-value", selectedDate.value.toISOString().split("T")[0]); // ISO 형식
};
</script>

<style>
.v-menu__content {
  margin-top: 0; /* Text-field 바로 아래에 위치 */
}

.v-overlay__content {
  height: auto; /* 높이를 동적으로 설정 */
}

.v-picker-title {
  display: none;
}

.v-date-picker-header {
  display: none;
}

.v-card {
  background-color: rgba(6, 6, 6, 0) !important;
  color: white !important;
}

.v-sheet {
  background-color: rgba(6, 6, 6, 0.5) !important;
  color: white !important;
}

.v-card-actions {
  background-color: rgba(6, 6, 6, 0.5) !important;
  color: white !important;
}

.v-picker.v-sheet {
  border-radius: 0;
  width: 100%;
}

.v-btn {
  background-color: rgba(6, 6, 6, 0) !important;
  color: white !important;
}

.v-date-picker-month__day--selected {
  background-color: white !important;
  color: rgba(6, 6, 6, 0) !important;
  border-radius: 50%;
}

/* 선택된 날짜 버튼 내부 텍스트 */
.v-date-picker-month__day--selected .v-btn {
  background-color: white !important;
  color: black !important;
  border-radius: 50% !important;
}

.v-btn__content {
  font-size: 16px;
}
</style>
