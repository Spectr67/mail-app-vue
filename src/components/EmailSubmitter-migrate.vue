<script>
import WrapFormEmail from './WrapFormEmail.vue'
import WrapFormInput from './WrapFormInput.vue'

export default {
  components: { WrapFormEmail, WrapFormInput },
  emits: ['submitted'],
  props: ['list'],
  data() {
    return {
      skeleton: [, { subject: 's12' }, { text: 's12' }],
      struct: {
        // { recipient: 's12' }
        // recipient: {
        //   col: 's12',
        //   caption: 'recipient',
        //   type: 'text',
        //   data: undefined,
        //   component: 'WrapInputSearch',
        // },
        subject: {
          col: 's12',
          caption: 'subject',
          type: 'text',
          data: undefined,
          component: 'MInput',
        },
        text: {
          col: 's12',
          caption: 'text',
          type: 'text',
          data: undefined,
          component: 'MInput',
        },
      },
      confirmCaption: 'Send',
      confirmIcon: 'send',
      discardCaption: 'Back',
      discardIcon: 'close',
    }
  },
}
</script>

<template>
  <WrapFormEmail
    :list="list"
    :skeleton="skeleton"
    :struct="struct"
    :confirm-caption="confirmCaption"
    :confirm-icon="confirmIcon"
    :discard-caption="discardCaption"
    :discard-icon="discardIcon"
    @submitted="$emit('submitted', { ...$event })"
  />
</template>
