<template>
  <div>
    <!-- 기본 버튼 -->
    <CustomButton size="small">small</CustomButton>

    <!-- secondary 버튼 -->
    <CustomButton size="large">large</CustomButton>

    <!-- danger 버튼 -->
    <CustomButton size="large" :disabled="true">Danger Disabled</CustomButton>
  </div>
</template>

<script setup>
import CustomButton from "@/components/atoms/CustomButton.vue";
</script>

<style lang="scss" scoped></style>
