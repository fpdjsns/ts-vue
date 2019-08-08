import Vue from "vue";
import Index from "./components/Index";
import { store } from "./store";
import { router } from "./routes";
let v = new Vue({
  el: "#app",
  template: `
    <div>
    <Index/>
    </div>`,
  components: {
    Index
  },
  store,
  router
});

(<any>window).app = v;
