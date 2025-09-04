<script>
import { BFormTags } from 'bootstrap-vue-next'

export default {
  name: 'ContactTagSearch',
  components: { BFormTags },
  props: ['emails'],
  data() {
    return {
      value: [],
    }
  },

  computed: {
    avaibleEmails() {
      return this.emails.filter(e => !this.value.includes(e))
    },
  },
}
</script>

<template>
  <div>
    <datalist id="foo">
      <option
        v-for="email in avaibleEmails"
        :key="email"
        :value="email"
      ></option>
    </datalist>

    <BFormTags
      list="foo"
      :input-attrs="{ list: 'foo' }"
      v-model="value"
      input-id="tags-basic"
      placeholder="Введите email"
    />

    <p class="mt-3">Выбранные: {{ value }}</p>
    <p class="mt-3">{{ avaibleEmails }}</p>
  </div>
</template>
