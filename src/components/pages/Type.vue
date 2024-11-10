<template>
  <div class="flex flex-col">
    <h1>Type Page</h1>
    <button @click="goToEziType">EziType으로 이동</button>
    <button @click="goToYongType">YongType으로 이동</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goToEziType() {
  router.push("/eziType");
}

function goToYongType() {
  router.push("/yongType");
}
</script>

<style lang="scss" scoped></style>
