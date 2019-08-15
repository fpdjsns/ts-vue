<template>
  <div>
    <h1>User Data</h1>
    <div v-if="user != null">
      id : {{ user.id }}<br>
      email : {{ user.email }}<br>
      first_name : {{ user.first_name }}<br>
      last_name : {{ user.last_name }}<br>
      avatar : {{ user.avatar }}<br>
    </div>
    <div v-else>
      user is Null
    </div>
      
    <button @click="fetchUser(2)">
      action 호출
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapActions } from 'vuex';
import { State } from 'vuex-class';
import { User } from '@/types/user';

@Component({
    methods: {
    ...mapActions('reqres', ['fetchUser'])
    }
})
export default class Reqres extends Vue {
    @State('user', {namespace: 'reqres'})
    private user!: User
}
</script>