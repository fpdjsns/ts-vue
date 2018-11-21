import Vue from "vue";
import Index from "./components/Index";

let v = new Vue({
    el: "#app",
    template: `
    <div>
    hi
    <Index/>
    </div>`,
    components: {
        Index
    }
});