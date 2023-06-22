<template>
  <div
    :style="{ top: `${positionProps.y}px`, left: `${positionProps.x}px` }"
    v-show="mouseDown"
    class="draggble-item"
  >
    <Item
      v-if="item"
      :id="item && item.position"
      :title="item && item.title"
      :image="item.img"
    />
  </div>
</template>
<!-- mouseDown -->
<!-- item -->
<!-- pos.x pos.y -->

<script setup>
import Item from "./Item.vue";
const props = defineProps({
  item: {
    type: Object,
    required: false,
  },
  positionProps: {
    type: Object,
    required: false,
  },
  mouseDown: {
    type: Boolean,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.draggble-item {
  pointer-events: none;
  position: absolute;
  width: calc(100% / 5);
  height: calc(100% / 5);
  display: block;
  transform: translate(-50%, -50%);
}
</style>
