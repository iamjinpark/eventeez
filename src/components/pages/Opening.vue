<template>
  <div
    class="w-full relative flex flex-col justify-center items-center gap-10"
    @click="shuffleImages"
  >
    <div class="flex flex-col items-center justify-center gap-2">
      <img
        v-for="(src, index) in images"
        :key="index"
        :src="src.path"
        :alt="src.alt"
        :class="['shuffle-image', { shuffled: isShuffled }]"
        :style="src.style"
      />
    </div>

    <CustomButton @click.stop="goToHomePage">Want to make?</CustomButton>
  </div>
</template>

<script setup>
import CustomButton from "@/components/atoms/CustomButton.vue";
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";

const router = useRouter();
const isShuffled = ref(false);

const images = reactive([
  { path: "/year-end.png", alt: "연말", style: {} },
  { path: "/or.png", alt: "또는", style: {} },
  { path: "/new-year.png", alt: "새해", style: {} },
  { path: "/party.png", alt: "모임", style: {} },
  { path: "/invitation.png", alt: "초대장", style: {} },
]);

// 무작위 위치로 이미지 이동
function shuffleImages() {
  isShuffled.value = true;
  images.forEach((img) => {
    const randomAngle = Math.floor(Math.random() * 30) - 15; // -15도에서 15도 사이로 회전
    const randomX = Math.floor(Math.random() * 40) - 20; // -20px에서 20px 사이 이동
    const randomY = Math.floor(Math.random() * 40) - 20; // -20px에서 20px 사이 이동

    img.style = {
      transform: `translate(${randomX}px, ${randomY}px) rotate(${randomAngle}deg)`,
    };
  });
}

function goToHomePage() {
  router.push("/home");
}
</script>

<style lang="scss" scoped>
.shuffle-image {
  transition: transform 0.5s ease;
}
</style>
