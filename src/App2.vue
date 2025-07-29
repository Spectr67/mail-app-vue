<script>
import MForm from './ui/MForm.vue'

export default {
  components: { MForm },

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
          component: 'MCheckBox',
        },
        password: {
          col: 's6',
          caption: 'Ваш пароль',
          data: undefined,
          component: 'MSwitch',
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
</template>
