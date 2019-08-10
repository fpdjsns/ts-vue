import { Vue, Component } from 'vue-property-decorator';
import { ProductInfo } from '../../store/modules/product';
import { State, Getter } from 'vuex-class';

@Component({
  template: require('./Product.html')
  // computed: mapState('product', ['pageName', 'product'])
})
export default class Product extends Vue {
  @State
  private constants!: object;

  @State('pageName', { namespace: 'product' })
  private pageName!: string;

  // @State('product',{namespace})
  // product!: ProductInfo;

  @State('product', { namespace: 'product' })
  private product!: ProductInfo;

  @Getter('productRegisterYear', { namespace: 'product' })
  private productRegisterYear!: () => string;

  private registerYear: string = '';

  private mounted(): void {
    // state
    console.log(this.pageName);
    console.log(this.product);
    console.log(this.constants);

    // getter
    console.log(this.productRegisterYear());
    this.registerYear = this.productRegisterYear();
  }
}
