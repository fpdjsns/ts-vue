import { Vue, Component, Prop } from "vue-property-decorator";
import Test1 from "../Test1";

@Component({
    template: require('./Index.html'),
    components: {Test1}
})
export default class Index extends Vue {
}