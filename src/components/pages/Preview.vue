<template>
  <div class="flex flex-col">
    <h1>Preview Page</h1>
    <button @click="goToInvitation">최종 초대장으로 이동</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goToInvitation() {
  router.push("/Invitation");
}
</script>

<style lang="scss" scoped></style>
