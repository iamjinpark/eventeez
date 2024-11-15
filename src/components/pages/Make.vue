<template>
  <div>
    <h1>Make Page</h1>
    <p>Selected Image ID: {{ id }}</p>
    <router-view />
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
