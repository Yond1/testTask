<template>
  <div class="layout">
    <div class="layout-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100vh;
  background: var(--background-color);
  &-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
