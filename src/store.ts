import Vue from "vue";
import Vuex from "vuex";
import constants from "./constants";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        constants: constants
    },
    getters: {
        CONSTANTS: state => {
          return state.constants
        }
    }
});