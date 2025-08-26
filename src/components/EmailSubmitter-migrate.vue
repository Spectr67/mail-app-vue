<script>
import WrapForm from './WrapForm.vue'

export default {
  components: { WrapForm },
  emits: ['submitted'],

  data() {
    return {
      skeleton: [{ recipient: 's12' }, { subject: 's12' }, { text: 's12' }],
      struct: {
        recipient: {
          col: 's12',
          caption: 'recipient',
          type: 'text',
          data: undefined,
          component: 'MInput',
        },
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
  <WrapForm
    :skeleton="skeleton"
    :struct="struct"
    :confirm-caption="confirmCaption"
    :confirm-icon="confirmIcon"
    :discard-caption="discardCaption"
    :discard-icon="discardIcon"
    @submitted="$emit('submitted', { ...$event })"
  />
</template>
