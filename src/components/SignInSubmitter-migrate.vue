<script>
import MForm from '@/ui/MForm.vue'
export default {
  components: { MForm },

  emits: ['userLogin'],

  data() {
    return {
      list: [],
      skeleton: [{ email: 's12' }, { password: 's12' }],
      struct: {
        email: {
          col: 's12',
          caption: 'Email',
          // type: 'email',
          data: undefined,
          component: 'MInput',
        },
        password: {
          col: 's12',
          caption: 'Passworld',
          type: 'password',
          data: undefined,
          component: 'MInput',
        },
      },
      confirmCaption: 'Login',
      confirmIcon: 'login',
      discardCaption: 'Exit',
      discardIcon: 'close',
    }
  },

  methods: {
    handleLogin(data) {
      this.$emit('userLogin', { ...data })
    },
  },
}
</script>

<template>
  {{ list }}
  <MForm
    :skeleton="skeleton"
    :struct="struct"
    :confirmCaption="confirmCaption"
    :confirmIcon="confirmIcon"
    :discardCaption="discardCaption"
    :discardIcon="discardIcon"
    @userLogin="handleLogin"
  />
</template>
