<template>
  <div class="flex flex-col items-center justify-center">
    <router-view />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});
</script>
