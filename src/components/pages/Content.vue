<template>
  <div class="flex flex-col">
    <h1>Content Page</h1>
    <button type="button" @click="goToNext">preview 페이지 이동</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function goToNext() {
  router.push("/make/preview");
}
</script>

<style lang="scss" scoped></style>
