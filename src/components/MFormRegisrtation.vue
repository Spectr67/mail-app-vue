<script>
import { registerAccount } from '@/model/server/accounts.js'
import MInput from './MInput.vue'
const initAccount = () => ({
  firstName: 'qqq',
  lastName: 'www',
  email: 'eee@eee',
  password: 'qwe',
})

export default {
  components: { MInput },
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
  },
}
</script>

<template>
  <form class="container" @submit.prevent="onSubmit">
    <div class="row">
      <div class="col s4">
        <MInput
          v-model="account.firstName"
          caption="First Name"
          type="text"
          class="validate"
          required
        />
      </div>
      <div class="col s4">
        <MInput
          v-model="account.secondName"
          caption="Second Name"
          type="text"
          class="validate"
          required
        />
      </div>
      <div class="col s8">
        <MInput
          v-model="account.email"
          caption="Email"
          type="email"
          class="validate"
          required
        />
      </div>
      <div class="col s8">
        <MInput
          v-model="account.password"
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
      >
        Cancel
      </a>
      <button type="submit" class="waves-effect waves-green btn-flat">
        Submit
      </button>
    </div>
  </form>
</template>
