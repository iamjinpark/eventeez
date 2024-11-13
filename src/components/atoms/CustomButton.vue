<!-- src/components/BaseButton.vue -->
<template>
  <button :class="buttonClasses" :disabled="disabled" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from "vue";

// Props
const props = defineProps({
  size: {
    default: "large",
  },
  disabled: {
    default: false,
  },
});

// 이벤트
const emit = defineEmits(["click"]);

function handleClick(event) {
  if (!props.disabled) {
    emit("click", event);
  }
}

// 버튼 클래스 계산
const buttonClasses = computed(() => {
  return [
    "base-button",
    `btn-${props.size}`,
    { "btn-disabled": props.disabled },
  ];
});
</script>

<style scoped>
/* 기본 */
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #bdbdbd;
  border-radius: 12px;
  font-size: 1.125rem;
}

.base-button:hover:not(.btn-disabled) {
  color: white;
  background-color: #4b4b4b;
}

/* 크기 */
.btn-small {
  width: 160px;
  height: 70px;
}

.btn-large {
  width: 320px;
  height: 70px;
}

/* 비활성화 */
.btn-disabled {
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
}
</style>
