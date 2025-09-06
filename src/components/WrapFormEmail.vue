<script>
import { BButton, BForm } from 'bootstrap-vue-next'
import WrapFormInput from './WrapFormInput.vue'
import WrapInputSearch from './WrapInputSearch.vue'

export default {
  components: { BForm, BButton, WrapFormInput, WrapInputSearch },
  emits: ['submitted'],
  props: ['skeleton', 'struct', 'list'],

  data() {
    return {
      localStruct: JSON.parse(JSON.stringify(this.struct)),
    }
  },

  methods: {
    submit() {
      let account = Object.fromEntries(
        Object.entries(this.localStruct).map(([key, { data }]) => [key, data])
      )
      this.$emit('submitted', account)
      this.localStruct = JSON.parse(JSON.stringify(this.struct))
    },
  },
}
</script>

<template>
  <div>
    <WrapInputSearch :list="list" />
    <div v-for="(row, idx) of skeleton" :key="idx" class="row">
      <div v-for="(col, key) of row" :key="key" class="col" :class="col">
        <WrapFormInput
          :list="list"
          :is="localStruct[key].component"
          :caption="localStruct[key].caption"
          v-model="localStruct[key].data"
          :type="localStruct[key].type"
          class="validate"
          required
        />
      </div>
    </div>
    <BForm @submit.prevent="submit">
      <BButton variant="success" type="submit">Submit</BButton>
    </BForm>
  </div>
</template>
