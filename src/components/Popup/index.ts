import { Vue, Component } from 'vue-property-decorator';

@Component({
  template: require('./Popup.html')
})
export default class Popup extends Vue {
  private name: string = '';

  private mounted(): void {
    const name = this.$route.query.name;
    if (typeof name === 'string') {
      this.name = name;
    }
  }

  private sendData(): void {
    window.opener.app.$root.$store.commit('popup/SET_NAME', this.name);
    window.close();
  }

  private close(): void {
    window.close();
  }
}
