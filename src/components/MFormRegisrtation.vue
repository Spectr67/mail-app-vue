<script>
import { registerAccount } from '@/model/server/accounts.js'
import MInput from './MInput.vue'
import MButton from './MButton.vue'
const initAccount = () => ({
  firstName: 'qqq',
  lastName: 'www',
  email: 'eee@eee',
  password: 'qwe',
})

export default {
  components: { MInput, MButton },
  emits: ['userSubmit', 'serverSubmit'],
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
      <div class="col s6">
        <MInput
          v-model="account.firstName"
          caption="First Name"
          type="text"
          class="validate"
          required
        />
      </div>
      <div class="col s6">
        <MInput
          v-model="account.secondName"
          caption="Second Name"
          type="text"
          class="validate"
          required
        />
      </div>
      <div class="col s12">
        <MInput
          v-model="account.email"
          caption="Email"
          type="email"
          class="validate"
          required
        />
      </div>
      <div class="col s12">
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
      <MButton caption="Cancel" />
      <MButton caption="Submit" />
    </div>
  </form>
</template>
