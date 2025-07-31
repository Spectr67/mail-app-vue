<script>
import MForm from './ui/MForm.vue'
import MtextArea from './ui/MTextArea.vue'

export default {
  components: { MForm, MtextArea },

  data() {
    return {
      list: [],
      skeleton: [{ email: 's12' }, { login: 's6', password: 's6' }],
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
  <MtextArea />
</template>
