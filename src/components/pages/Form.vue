<template>
  <div class="flex flex-col">
    <h1>Form Page</h1>
    <button type="button" @click="goToTypePage">type 페이지 이동</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function goToTypePage() {
  router.push("/type");
}
</script>

<style lang="scss" scoped></style>
