<script>
import { registerAccount } from '@/model/server/accounts.js'

const initAccount = () => ({
  firstName: 'qqq',
  lastName: 'www',
  email: 'eee@eee',
  password: 'qwe',
})

export default {
  emits: ['close', 'userSubmit'],

  data() {
    return {
      account: initAccount(),
    }
  },

  methods: {
    onSubmit() {
      // this.$emit('userSubmit', { ...account })
      registerAccount({ ...this.account })
      this.account = initAccount()
    },
  },
}
</script>

<template>
  <form class="col s12" @submit.prevent="onSubmit">
    <div class="row">
      <div class="input-field col s6">
        <input
          v-model="account.firstName"
          id="first_name"
          type="text"
          class="validate"
          required
        />
        <label for="first_name">First Name</label>
      </div>
      <div class="input-field col s6">
        <input
          v-model="account.lastName"
          id="last_name"
          type="text"
          class="validate"
          required
        />
        <label for="last_name">Last Name</label>
      </div>
    </div>

    <div class="row">
      <div class="input-field col s12">
        <input
          v-model="account.email"
          id="email"
          type="email"
          class="validate"
          required
        />
        <label for="email">Email</label>
      </div>
    </div>

    <div class="row">
      <div class="input-field col s12">
        <input
          v-model="account.password"
          id="password"
          type="password"
          class="validate"
          required
        />
        <label for="password">Password</label>
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
