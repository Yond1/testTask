<template>
  <div class="cell">
    <slot></slot>
  </div>
</template>

<script setup>
import {} from "vue";
</script>

<style lang="scss" scoped>
$width: 525px;
$height: 500px;
.cell {
  width: calc($width / 5);
  height: calc($height / 5);

  border: 1px solid var(--second-color);
  cursor: pointer;
  &:hover {
    background: var(--cell-hover-bg);
  }
}
</style>
