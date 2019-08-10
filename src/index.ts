import Vue from 'vue';
import Index from './components/Index';
import { store } from './store';
import { router } from './routes';
let v = new Vue({
  el: '#app',
  components: {
    Index
  },
  template: `
    <div>
    <Index/>
    </div>`,
  store,
  router
});

(window as any).app = v;
