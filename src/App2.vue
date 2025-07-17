<script>
import MForm from './components/MForm.vue'

export default {
  components: { MForm },

  data() {
    return {
      list: [],
      skeleton: [{ email: 's12' }, { login: 's6', passwd: 's6' }],
      struct: {
        email: {
          caption: 'Ваш email',
          data: undefined,
        },
        login: {
          caption: 'Ваш логин',
          data: undefined,
        },
        passwd: {
          caption: 'Ваш пароль',
          data: undefined,
        },
      },
    }
  },
}
</script>

<template>
  <div>
    <section>
      {{ list }}
      <article>
        <MForm
          :skeleton="skeleton"
          :struct="struct"
          @submitted="list.push($event)"
        />
      </article>
    </section>
  </div>
</template>
