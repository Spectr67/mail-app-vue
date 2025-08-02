<script>
import MForm from './ui/MForm.vue'
import MSelect from './ui/MSelect.vue'

export default {
  components: { MForm, MSelect },

  data() {
    return {
      selectedDish: '',
      availableDishes: ['борщ', 'суп', 'макароны', 'пельмени', 'картоха'],
      list: [
        { caption: 'hello', value: '1' },
        { caption: 'world', value: '2' },
        { caption: 'my', value: '3' },
      ],
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
      <h1 @click="selectedDish = 'макароны'">{{ selectedDish }}</h1>
      <article>
        <MSelect
          :list="availableDishes"
          caption="Select"
          :model-value="selectedDish"
        />
      </article>
      <!-- {{ list }} -->
      <!-- <article>
        <MForm
          :skeleton="skeleton"
          :struct="struct"
          @submitted="list.push($event)"
        />
      </article> -->
    </section>
  </div>
  <button @click="selectedDish = 'макароны'">OK!</button>
  <MTextarea />
</template>
