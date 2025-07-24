<script>
import { loginAccount } from '@/model/server/interface'

import MInput from './MInput.vue'
import MButton from './MButton.vue'

export default {
  components: { MInput, MButton },
  emits: ['userLogin'],

  data() {
    return {
      email: '',
      password: '',
    }
  },

  methods: {
    onSubmit() {
      const user = loginAccount(this.email, this.password)
      if (user) {
        this.$emit('userLogin', { ...user })
        this.email = ''
        this.password = ''
      }
    },
  },
}
</script>

<template>
  <form class="container" @submit.prevent="onSubmit">
    <div class="row">
      <div class="col s12">
        <MInput
          v-model="email"
          caption="Email"
          type="email"
          class="validate"
          required
        />
      </div>
      <div class="col s12">
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
      <MButton caption="Cancel" />
      <MButton caption="Submit" />
    </div>
  </form>
</template>
