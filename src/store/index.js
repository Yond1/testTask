import { createStore } from "vuex";

export default createStore({
  state: {
    items: [
      {
        position: 23,
        title: "Axe",
        img: "https://png.pngtree.com/png-clipart/20190920/original/pngtree-bronze-sword-cartoon-illustration-png-image_4621258.jpg",
        descr:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ex dolore corrupti, nulla, exercitationem culpa hic quos impedit sapiente magni, fugiat consectetur aut consequatur?",
      },
      {
        position: 22,
        title: "Hurrican",
        img: "https://png.pngtree.com/png-clipart/20190920/original/pngtree-bronze-sword-cartoon-illustration-png-image_4621258.jpg",
        descr:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ex dolore corrupti, nulla, exercitationem culpa hic quos impedit sapiente magni, fugiat consectetur aut consequatur?",
      },
      {
        position: 13,
        title: "Pipe",
        img: "https://png.pngtree.com/png-clipart/20190920/original/pngtree-bronze-sword-cartoon-illustration-png-image_4621258.jpg",
        descr:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ex dolore corrupti, nulla, exercitationem culpa hic quos impedit sapiente magni, fugiat consectetur aut consequatur?",
      },
      {
        position: 19,
        title: "Sword",
        img: "https://png.pngtree.com/png-clipart/20190920/original/pngtree-bronze-sword-cartoon-illustration-png-image_4621258.jpg",
        descr:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ex dolore corrupti, nulla, exercitationem culpa hic quos impedit sapiente magni, fugiat consectetur aut consequatur?",
      },
    ],
  },
  getters: {},
  mutations: {
    deleteItem(state, payload) {
      state.items = state.items.filter((el) => el.position !== payload);
    },
  },
  actions: {},
  modules: {},
});
