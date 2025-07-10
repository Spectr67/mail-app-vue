<script>
import { registerAccount } from '@/model/server/accounts.js'

const initAccount = () => ({
  firstName: 'qqq',
  lastName: 'www',
  email: 'eee@eee',
  password: 'qwe',
})

export default {
  emits: ['close', 'userSubmit', 'click', 'serverSubmit'],
  props: ['accounts'],
  data() {
    return {
      account: initAccount(),
    }
  },

  methods: {
    onSubmit() {
      const data = { ...this.account }
      const response = registerAccount(data, this.accounts)
      console.log(response)
      this.$emit('serverSubmit', response)
      if (response) {
        this.$emit('userSubmit', data)
        this.account = initAccount()
      }
    },
    click() {
      const inputs = this.$refs.form.querySelectorAll('input')
      inputs.forEach(input => input.focus())
    },
  },
}
</script>

<template>
  <form class="col s12" @submit.prevent="onSubmit" ref="form">
    <div class="row">
      <div class="input-field col s6">
        <label>First Name</label>
        <input
          v-model="account.firstName"
          type="text"
          class="validate"
          required
        />
      </div>
      <div class="input-field col s6">
        <label
          ><input
            v-model="account.lastName"
            type="text"
            class="validate"
            required
          />Last Name</label
        >
      </div>
    </div>

    <div class="row">
      <div class="input-field col s12">
        <label>
          <input
            v-model="account.email"
            type="email"
            class="validate"
            required
          />Email</label
        >
      </div>
    </div>

    <div class="row">
      <div class="input-field col s12">
        <label>
          <input
            v-model="account.password"
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
</template>
