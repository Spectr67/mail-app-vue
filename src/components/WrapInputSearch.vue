<script>
import { BFormTags } from 'bootstrap-vue-next'

export default {
  name: 'ContactTagSearch',
  components: { BFormTags },
  props: ['list'],
  emits: ['update:modelValue'],
  data() {
    return {
      value: [],
    }
  },

  computed: {
    availableEmails() {
      console.log(this.list)
      return this.list.filter(e => !this.value.includes(e))
    },
  },
}
</script>

<template>
  <div>
    <datalist id="email-addresses-list">
      <option
        v-for="email in availableEmails"
        :key="email"
        :value="email"
      ></option>
    </datalist>

    <BFormTags
      :input-attrs="{ list: 'email-addresses-list' }"
      v-model="value"
      @update:model-value="$emit('update:modelValue', $event)"
      input-id="tags-basic"
      placeholder="Введите email"
    />
    <!-- 
    <p class="mt-3">Выбранные: {{ value }}</p> -->
    <!-- <p class="mt-3">{{ availableEmails }}</p> -->
  </div>
</template>
