<script>
import { registerAccount } from '@/model/server/accounts.js'
import MInput from './MInput.vue'
import MButton from './MButton.vue'
const initAccount = () => ({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
})

export default {
  components: { MInput, MButton },
  emits: ['userSubmit', 'serverSubmit'],
  data() {
    return {
      account: initAccount(),
    }
  },

  methods: {
    onSubmit() {
      const data = { ...this.account }
      const response = registerAccount(data)
      this.$emit('serverSubmit', !!response)
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
          v-model="account.lastName"
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
      <MButton caption="Cancel" class="mr-10" />
      <MButton caption="Submit" />
    </div>
  </form>
</template>
<style scoped>
.mr-10 {
  margin-right: 10px;
}
</style>
