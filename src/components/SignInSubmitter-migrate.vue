<script>
import MForm from '@/ui/MForm.vue'
import { loginAccount } from '@/model/server/interface'

export default {
  components: { MInput, MButton, MForm },

  emits: ['userLogin'],

  data() {
    return {
      email: '',
      password: '',
    }
  },

  methods: {
    onSubmit() {
      const account = loginAccount(this.email, this.password)
      if (account) {
        this.$emit('userLogin', { ...account })
        this.email = ''
        this.password = ''
      }
    },
  },
}
</script>

<template>
  <MForm />

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
