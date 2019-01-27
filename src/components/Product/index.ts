import { Vue, Component } from "vue-property-decorator";
import { mapState } from 'vuex'
import { ProductInfo } from "../../store/modules/product";
import {State, Getter} from 'vuex-class';

const namespace: string = 'product';

@Component({
    template: require('./Product.html'),
    // computed: mapState('product', ['pageName', 'product'])
})
export default class Product extends Vue {

    @State
    constants!: object;

    @State(state => state.product.pageName)
    pageName!: string;

    // @State('product',{namespace})
    // product!: ProductInfo;

    @State('product',{namespace: 'product'})
    product!: ProductInfo;

    @Getter('productRegisterYear', {namespace: 'product'})
    productRegisterYear!: () => string;

    registerYear: string = '';

    private mounted() {
        // state
        console.log(this.pageName);
        console.log(this.product);
        console.log(this.constants);

        // getter
        console.log(this.productRegisterYear());
        this.registerYear = this.productRegisterYear();
    }
}