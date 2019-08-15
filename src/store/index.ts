import Vue from 'vue';
import Vuex from 'vuex';
import constants from './constants';
import * as product from './modules/product';
import * as popup from './modules/popup';
import * as reqres from './modules/reqres';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    constants: constants
  },
  modules: {
    product,
    popup,
    reqres
  },
  getters: {
    CONSTANTS: state => {
      return state.constants;
    }
  }
});
