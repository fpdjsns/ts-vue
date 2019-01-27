import Vue from "vue";
import Index from "./components/Index";
import {store} from './store';
let v = new Vue({
    el: "#app",
    template: `
    <div>
    <Index/>
    </div>`,
    components: {
        Index
    },
    store
});