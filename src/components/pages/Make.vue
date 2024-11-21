<template>
  <div class="flex flex-col items-center justify-center">
    <router-view />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

// 라우트에서 id 가져오기
const route = useRoute();
const id = route.params.id || null;
</script>
