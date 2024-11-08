<template>
  <div>
    <h2>반응형 메세지</h2>
    {{ reactiveMessage }}
    <button v-on:click="addReactiveMessage">Add Message</button>
    <h2>일반 메세지</h2>
    {{ normalMessage }}
    <button v-on:click="addNormalMessage">Add Message</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from "vue";

console.log("setup");
const reactiveMessage = ref("Hello Reactive Message");
const normalMessage = "Hello Normal Message";

const addReactiveMessage = () => {
  reactiveMessage.value = reactiveMessage.value + "!";
};

const addNormalMessage = () => {
  normalMessage = normalMessage + "!";
};

onMounted(() => {
  console.log("Mounted");
});

onBeforeMount(() => {
  console.log("before Mounted");
});
</script>

<style lang="scss" scoped></style>
