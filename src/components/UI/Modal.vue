<template>
  <div @click.stop v-show="modalProps.open" class="popup">
    <div @click="$emit('closeModal', false)" class="popup-close">X</div>
    <div class="popup-image">
      <img :src="modalProps.item && modalProps.item.img" alt="" />
    </div>
    <div class="popup-title">
      <h2>
        {{ modalProps.item && modalProps.item.title }}
      </h2>
    </div>
    <div class="popup-descr">
      <p>{{ modalProps.item && modalProps.item.descr }}</p>
    </div>
    <button
      @click="
        [
          $emit('deleteItem', modalProps.item.position),
          $emit('closeModal', false),
        ]
      "
      class="popup-bth"
    >
      Удалить предмет
    </button>
  </div>
</template>

<!-- openModal -->
<!-- closeModal -->
<!-- props: item -->

<script setup>
const props = defineProps({
  modalProps: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(["closeModal", "deleteItem"]);
</script>

<style lang="scss" scoped>
.popup {
  position: absolute;
  display: none;

  width: 50%;
  height: 100%;
  right: 0;
  z-index: 3;

  padding: 10px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 20px;

  background: var(--second-color);

  //   transform: translate(100%);
  transition: 0.5s ease-in;

  &-close {
    position: absolute;
    top: 5%;
    right: 10%;
    cursor: pointer;
  }
  &-image {
    width: 28%;
    height: 28%;
    display: flex;
    object-fit: contain;
    justify-content: center;
  }
  &-title {
  }
  &-descr {
  }
  &-title {
  }
  &-bth {
    padding: 15px 40px;
    background: var(--button-red-color);
    border-radius: 12px;
    border: none;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
