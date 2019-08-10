import { Vue, Component } from 'vue-property-decorator';
import { State } from 'vuex-class';

@Component({
  template: require('./Test1.html')
})
export default class Test1 extends Vue {
  @State('name', { namespace: 'popup' })
  private name!: string;

  private openPopup(): void {
    window.open(`/popup?name=${this.name}`, 'Popup');
  }
}
