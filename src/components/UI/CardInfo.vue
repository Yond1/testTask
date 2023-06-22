<template>
  <section class="card">
    <div class="card-top">
      <img src="../../assets/images/image.png" alt="" class="card-top-image" />
    </div>
    <div class="card-title">Title</div>
    <div class="card-description">description</div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
$radius: var(--card-radius);
.card {
  padding: 18px 14px;
  width: 236px;
  height: 500px;

  background: var(--first-color);
  border-radius: $radius;

  display: flex;
  flex-direction: column;
  align-items: center;
  &-top {
    width: 208px;
    height: 240px;
    border-radius: $radius;
    &-image {
      width: 100%;
      height: 100%;
      display: flex;
      object-fit: cover;
    }
  }
}
</style>
