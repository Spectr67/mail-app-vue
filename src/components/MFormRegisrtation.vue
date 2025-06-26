<script>
export default {
  emits: ['close', 'userSubmit'],

  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  },

  methods: {
    onSubmit() {
      const userData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      }

      this.$emit('userSubmit', userData)
      this.$emit('close')
    },
  },
}
</script>

<template>
  <form class="col s12" @submit.prevent="onSubmit">
    <div class="row">
      <div class="input-field col s6">
        <input
          v-model="firstName"
          id="first_name"
          type="text"
          class="validate"
          required
        />
        <label for="first_name">First Name</label>
      </div>
      <div class="input-field col s6">
        <input
          v-model="lastName"
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
          v-model="email"
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
          v-model="password"
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
