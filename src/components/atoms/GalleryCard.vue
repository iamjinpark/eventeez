<template>
  <div>
    <ul>
      <li class="w-[155px] h-[195px] bg-gray-300">
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full h-full object-cover"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped></style>
