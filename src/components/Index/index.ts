import { Vue, Component, Prop } from "vue-property-decorator";
import Product from "../Product";

@Component({
    template: require('./Index.html'),
    components: {Product}
})
export default class Index extends Vue {
}