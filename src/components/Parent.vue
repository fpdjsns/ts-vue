<template>
  <div>
    Parent 
    data : {{ parentData }}
    <hr>
    <child
      name="withham"
      @emitEvent="emitEvent"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Child from './Child.vue';
@Component({
  components: {Child}
})
export default class Parent extends Vue {

  private parentData: string = 'default';

  private emitEvent(parentData: string) {
    this.parentData = parentData;
  }
}
</script>