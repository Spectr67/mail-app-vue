<script>
import { loginAccount } from '@/model/server/accounts'
import MInput from './MInput.vue'

export default {
  components: { MInput },
  emits: ['close', 'userLogin'],
  props: ['accounts'],

  data() {
    return {
      email: '',
      password: '',
    }
  },

  methods: {
    onSubmit() {
      console.log(this.email)
      const user = loginAccount(this.email, this.password, this.accounts)
      console.log(user)
      if (user) {
        this.$emit('userLogin', user)
        console.log(user)
      }
    },
  },
}
</script>

<template>
  <form class="container" @submit.prevent="onSubmit">
    <div class="row">
      <div class="col s8">
        <MInput
          v-model="email"
          caption="Email"
          type="email"
          class="validate"
          required
        />
      </div>
      <div class="col s8">
        <MInput
          v-model="password"
          caption="Password"
          type="password"
          class="validate"
          required
        />
      </div>
    </div>

    <div class="modal-footer">
      <a
        href="#!"
        @click="$emit('close')"
        class="waves-effect waves-red btn-flat"
        >Cancel</a
      >
      <button type="submit" class="waves-effect waves-green btn-flat">
        Submit
      </button>
    </div>
  </form>
</template>
