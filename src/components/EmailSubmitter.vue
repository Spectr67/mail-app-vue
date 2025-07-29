<script>
import MInput from './MInput.vue'
import MButton from './MButton.vue'

export default {
  components: { MInput, MButton },
  emits: ['userSendEmail'],

  data() {
    return {
      email: {
        recipient: '',
        subject: '',
        text: '',
      },
    }
  },

  methods: {
    onSubmit() {
      this.$emit('userSendEmail', this.email)
      this.email.recipient = ''
      this.email.subject = ''
      this.email.text = ''
    },
  },
}
</script>

<template>
  <form class="container" @submit.prevent="onSubmit">
    <div class="row">
      <div class="col s12">
        <MInput
          v-model="email.recipient"
          caption="Кому"
          type="email"
          required
        />
      </div>

      <div class="col s12">
        <MInput v-model="email.subject" caption="Тема" type="text" required />
      </div>

      <div class="col s12">
        <label for="text">Сообщение</label>
        <textarea
          id="text"
          v-model="email.text"
          class="materialize-textarea"
          required
        ></textarea>
      </div>
    </div>

    <div class="modal-footer">
      <MButton type="submit" caption="Отмена" class="mr-10" />
      <MButton type="submit" caption="Отправить" />
    </div>
  </form>
</template>
<style scoped>
.mr-10 {
  margin-right: 10px;
}
</style>
