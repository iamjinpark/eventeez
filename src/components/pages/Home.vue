<template>
  <div class="flex flex-col">
    <h1>Home Page</h1>
    <button type="button" @click="goToNext">Gallery 페이지 이동</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function goToNext() {
  router.push("/gallery");
}
</script>

<style lang="scss" scoped></style>
