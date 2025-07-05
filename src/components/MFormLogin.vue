<script>
export default {
  emits: ['close', 'userLogin'],

  data() {
    return {
      email: '',
      password: '',
    }
  },

  methods: {
    onSubmit() {
      this.$emit('userLogin', {
        email: this.email,
        password: this.password,
      })
    },
  },
}
</script>

<template>
  <div class="row">
    <form class="col s12" @submit.prevent="onSubmit">
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
  </div>
</template>
