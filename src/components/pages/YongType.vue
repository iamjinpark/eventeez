<template>
  <div class="flex flex-col">
    <h1>Yong Page</h1>
    <button @click="goToPreview">만들기로 이동</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goToPreview() {
  router.push("/preview");
}
</script>

<style lang="scss" scoped></style>
