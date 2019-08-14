<template>
  <div>
    Child : {{ name }} <br>
    <br>
    parent data : <input
      v-model="parentData"
      placeholder="parent data"
    >
    <button @click="onEmitEvent">
      부모에게 전송
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  props: ['name']
})
export default class Child extends Vue {

  private parentData: string = '';
  private onEmitEvent(){
    this.$emit('emitEvent', this.parentData);
  }

}
</script>