import { GetterTree } from "vuex";

export const namespaced = true;

interface State {
  name: string;
}

export const state: State = {
  name: "default name"
};

export const mutations = {
  SET_NAME(state: State, name: string) {
    state.name = name;
  }
};
