import Vue from "vue";
import Index from "./components/Index";
// import constants from "./constants";
import {store} from './store';
let v = new Vue({
    el: "#app",
    template: `
    <div>
    <!-- <h1>{{CONSTANTS.COUNTRY}}</h1> -->
    <h1>시작 : {{$store.getters.CONSTANTS.COUNTRY}}</h1>
    <Index/>
    </div>`,
    components: {
        Index
    },
    data:{
        // CONSTANTS: constants
    },
    store
});