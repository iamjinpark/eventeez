<template>
  <div>
    <h1>Date Page</h1>
    <p>ID: {{ id }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});
</script>
