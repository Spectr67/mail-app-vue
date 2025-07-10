<script>
import { loginAccount } from '@/model/server/accounts'

export default {
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
      const user = loginAccount(this.email, this.password, this.accounts)
      if (user) {
        this.$emit('userLogin', user)
        console.log(user)
      }
    },
  },
}
</script>

<template>
  <div class="row">
    <form class="col s12" @submit.prevent="onSubmit">
      <div class="row">
        <div class="input-field col s12">
          <label
            ><input
              v-model="email"
              type="email"
              class="validate"
              required
            />Email</label
          >
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <label
            ><input
              v-model="password"
              type="password"
              class="validate"
              required
            />Password</label
          >
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
  </div>
</template>
