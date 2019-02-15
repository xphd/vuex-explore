import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    value: 10
  },
  getters: {
    getValue: state => id => {
      return id + state.value;
    }
  }
});
