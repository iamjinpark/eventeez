<template>
  <div class="flex flex-col">
    <h1>Invitation Page</h1>
    <button type="button" @click="goToHome">Home 페이지 이동</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function goToHome() {
  router.push("/home");
}
</script>

<style lang="scss" scoped></style>
