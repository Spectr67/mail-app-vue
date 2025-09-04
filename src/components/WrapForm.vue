<script>
import { BButton, BForm } from 'bootstrap-vue-next'
import WrapFormInput from './WrapFormInput.vue'

export default {
  components: { BForm, BButton, WrapFormInput },
  emits: ['submitted'],
  props: ['skeleton', 'struct', 'inputData'],

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
    <div v-for="(row, idx) of skeleton" :key="idx" class="row">
      <div v-for="(col, key) of row" :key="key" class="col" :class="col">
        <WrapFormInput
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
