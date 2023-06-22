<template>
  <div class="item" v-if="title">
    <div :style="{ backgroundImage: `url(${image})` }" class="item-card">
      <!-- <img :src="image" :alt="title" class="item-card-image" /> -->
      {{ title }}
    </div>
  </div>
  <div class="item" v-else></div>
</template>

<script setup>
import { onMounted, watch } from "vue";

const props = defineProps({
  title: {
    type: String,
    require: false,
  },
  position: {
    type: Number,
    require: false,
  },
  image: {
    type: String,
    require: false,
  },
});

watch(props, () => {
  console.log(props);
});
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  &-card {
    position: relative;
    width: 50%;
    height: 50%;
    display: flex;
    background: rgb(72, 255, 0);
    transform-style: preserve-3d;
    background-position: center;
    background-size: contain;
    &::after {
      content: "";
      position: absolute;
      transform: translate(4px, -4px) translateZ(-1px);
      width: 100%;
      height: 100%;
      background: white;
      z-index: 1;
    }
  }
}
</style>
