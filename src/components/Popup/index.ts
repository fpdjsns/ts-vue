import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  template: require("./Popup.html")
})
export default class Popup extends Vue {
  private name: string = "";

  private mounted() {
    const name = this.$route.query.name;
    if (typeof name === "string") {
      this.name = name;
    }
  }

  private sendData() {
    window.opener.app.$root.$store.commit("popup/SET_NAME", this.name);
    window.close();
  }

  private close() {
    window.close();
  }
}
