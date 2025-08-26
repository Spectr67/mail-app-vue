<script>
import MForm from '@/ui/MForm.vue'
export default {
  components: { MForm },

  emits: ['submitted'],

  data() {
    return {
      skeleton: [
        { email: 's6', password: 's6' },
        // { password: 's6' },
        { firstName: 's6', lastName: 's6' },
        // { lastName: 's6' },
      ],
      struct: {
        email: {
          col: 's6',
          caption: 'Email',
          // type: 'email',
          data: undefined,
          component: 'MInput',
        },
        password: {
          col: 's6',
          caption: 'Password',
          type: 'password',
          data: undefined,
          component: 'MInput',
        },
        firstName: {
          col: 's6',
          caption: 'First Name',
          type: 'text',
          data: undefined,
          component: 'MInput',
        },
        lastName: {
          col: 's6',
          caption: 'Last Name',
          type: 'text',
          data: undefined,
          component: 'MInput',
        },
      },
      confirmCaption: 'Registrate',
      confirmIcon: 'login',
      discardCaption: 'Exit',
      discardIcon: 'close',
    }
  },
}
</script>

<template>
  <MForm
    :skeleton="skeleton"
    :struct="struct"
    :confirm-caption="confirmCaption"
    :confirm-icon="confirmIcon"
    :discard-caption="discardCaption"
    :discard-icon="discardIcon"
    @submitted="$emit('submitted', { ...$event })"
  />
</template>
