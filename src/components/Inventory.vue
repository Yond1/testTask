<template>
  <div class="inventory">
    <div class="inventory-top">
      <CardInfo />
      <ItemsGrid />
    </div>
    <section class="inventory-bottom"></section>
  </div>
</template>

<script setup>
import CardInfo from "./UI/CardInfo.vue";
import ItemsGrid from "./UI/ItemsGrid.vue";
</script>

<style lang="scss" scoped>
.inventory {
  width: 860px;
  height: 660px;

  padding: 32px;
  &-top {
    width: 100%;

    display: flex;
    flex-direction: row;
    gap: 24px;
  }
}
</style>
