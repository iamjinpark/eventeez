<template>
  <div class="flex flex-col">
    <h1>Home Page</h1>
    <button type="button" @click="goToFormPage">form 페이지 이동</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function goToFormPage() {
  router.push("/form");
}
</script>

<style lang="scss" scoped></style>
