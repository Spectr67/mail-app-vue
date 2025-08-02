<script>
import MForm from './ui/MForm.vue'

export default {
  components: { MForm },

  data() {
    return {
      list: [],
      skeleton: [
        { email: 's12' },
        { login: 's6', password: 's6' },
        { text: 's12' },
      ],
      struct: {
        email: {
          col: 's12',
          caption: 'Ваш email',
          data: undefined,
          component: 'MInput',
        },
        login: {
          col: 's6',
          caption: 'Ваш логин',
          data: undefined,
          component: 'MInput',
        },
        password: {
          col: 's6',
          caption: 'Ваш пароль',
          data: undefined,
          component: 'MInput',
        },
        text: {
          col: 's6',
          caption: 'Ваш текст',
          data: undefined,
          component: 'MTextarea',
        },
      },
    }
  },
}
</script>

<template>
  <div>
    <section>
      <!-- {{ list }} -->
      <article>
        <MForm
          :skeleton="skeleton"
          :struct="struct"
          @submitted="list.push($event)"
        />
      </article>
    </section>
  </div>
  <button @click="struct.password.data = true">OK!</button>
  <MTextarea />
</template>
