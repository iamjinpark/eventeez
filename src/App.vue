<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content} | SITE_NAME` : `SITE_NAME`
    }}</template>
  </metainfo>
  <Invitation />
</template>

<script setup>
import Invitation from "@/components/pages/Invitation.vue";
import { useMeta } from "vue-meta";

useMeta({
  title: "",
  htmlAttrs: { lang: "en", amp: true },
});
</script>

<style scoped></style>
