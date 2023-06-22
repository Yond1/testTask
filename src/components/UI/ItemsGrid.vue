<template>
  <div
    @mousemove="(e) => moved(e)"
    @mouseup="(e) => mouseUp(e)"
    @mousedown="(e) => [mouseDown(e)]"
    class="items-grid"
  >
    <Modal
      @mousedown.stop
      @mouseup.stop
      @close-modal="(e) => (propsToModal.open = e)"
      @delete-item="(e) => deleteItem(e)"
      :modal-props="propsToModal"
    />
    <DraggbleItem
      :position-props="position"
      :mouseDown="DropAndDown.mouseDown"
      :item="currentEl"
    />

    <Cell :id="indx" :key="item" v-for="(item, indx) of itemsView">
      <Item
        v-if="item"
        :id="item && item.position"
        :title="item && item.title"
        :image="item && item.img"
      />
      <Item v-else id="nonItem" />
    </Cell>
  </div>
</template>

<script setup>
import store from "@/store";
import Cell from "./Cell.vue";
import Item from "./Item.vue";
import { ref, onMounted, computed, watch, onUpdated, reactive } from "vue";
import DraggbleItem from "./DraggbleItem.vue";
import Modal from "./Modal.vue";

// Constants
// refs
const DropAndDown = ref({
  mouseDown: false,
  mouseUp: false,
});

const itemsView = ref([]);

const propsToModal = ref({
  open: false,
  item: {},
});

//store

const itemsStore = computed(() => store.state.items);

// scoped

let currentEl = ref(null);

let offsetGrid;

const position = ref({
  x: 0,
  y: 0,
});

let timeClick = reactive(0);

let delta;

// event function

const moved = (e) => {
  position.value.x = e.pageX - offsetGrid.left;
  position.value.y = e.pageY - offsetGrid.top;
};

const mouseDown = (e) => {
  if (!e.target.innerText) {
    return;
  }
  delta = setInterval(() => {
    timeClick++;
  }, 100);

  DropAndDown.value.mouseDown = true;
  DropAndDown.value.mouseUp = false;
  itemsView.value.map((el) =>
    el.position === Number(e.target.id) ? (currentEl.value = { ...el }) : el
  );
};
const mouseUp = (e) => {
  if (!currentEl.value) {
    return;
  }
  DropAndDown.value.mouseDown = false;
  DropAndDown.value.mouseUp = true;
  clearInterval(delta);
  if (timeClick < 1) {
    propsToModal.value.open = true;
    propsToModal.value.item = itemsView.value[e.target.id];
  }
  timeClick = 0;
  itemsView.value.map((el) =>
    el.position === Number(e.target.id)
      ? ((itemsView.value[currentEl.value.position] = {
          ...el,
          position: currentEl.value.position,
        }),
        (itemsView.value[el.position] = {
          ...currentEl.value,
          position: el.position,
        }))
      : el
  );
  currentEl.value = null;
};

const deleteItem = (itemPos) => {
  store.commit("deleteItem", itemPos);
  itemsView.value = itemsView.value.map((el) =>
    el.position === itemPos
      ? (el = { position: itemPos, title: null, img: "", descr: "" })
      : el
  );
};

// Mouted
onMounted(() => {
  const count = 25;

  const documentEl = document.querySelector(".items-grid");
  const offset = documentEl.getBoundingClientRect();

  offsetGrid = offset;

  for (let i = 0; i < count; i++) {
    itemsView.value.push({
      position: i,

      title: null,
      img: "",
      descr: "",
    });
  }

  itemsStore.value.forEach((el) => (itemsView.value[el.position] = el));
});

// watcher
watch(itemsStore, () => {});
</script>

<style lang="scss" scoped>
$radius: var(--card-radius);
$width: 525px;
$height: 500px;
$widthItem: calc($width/5);
$heightItem: calc($height/5);
.items-grid {
  position: relative;
  width: $width;
  height: $height;

  border-radius: $radius;

  background: var(--first-color);
  border: 1px solid var(--second-color);

  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(calc($width / $widthItem), 1fr);
  grid-template-rows: repeat(calc($height / $heightItem), 1fr);

  user-select: none;
}
</style>
