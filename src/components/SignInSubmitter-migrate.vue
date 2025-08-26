<script>
import MForm from '@/ui/MForm.vue'
export default {
  components: { MForm },

  emits: ['submitted'],

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
          caption: 'Password',
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
}
</script>

<template>
  {{ list }}
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
