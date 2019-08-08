import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  template: require("./Popup.html")
})
export default class Popup extends Vue {
  private name: string = "";

  private mounted() {
    this.name = this.$route.params.name;
  }

  private sendData() {
    window.opener.app.$root.$store.commit("popup/SET_NAME", this.name);
    window.close();
  }

  private close() {
    window.close();
  }
}
