<template>
  <div class="flex flex-col">
    <h1>Preview Page</h1>
    <button type="button" @click="goToNext">Invitation 페이지 이동</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function goToNext() {
  router.push("/invitation");
}
</script>

<style lang="scss" scoped></style>
