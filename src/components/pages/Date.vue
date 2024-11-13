<template>
  <div class="flex flex-col">
    <h1>Date Page</h1>
    <button type="button" @click="goToNext">address 페이지 이동</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function goToNext() {
  router.push("/make/address");
}
</script>

<style lang="scss" scoped></style>
