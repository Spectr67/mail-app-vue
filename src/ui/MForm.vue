<script>
import MButton from './MButton.vue'
import MInput from './MInput.vue'
import MSwitch from './MSwitch.vue'
import MCheckBox from './MCheckBox.vue'
import MTextarea from './MTextarea.vue'

export default {
  components: { MInput, MButton, MSwitch, MCheckBox, MTextarea },

  props: [
    'skeleton',
    'struct',
    'confirmCaption',
    'confirmIcon',
    'discardCaption',
    'discardIcon',
  ],

  emits: ['submitted'],

  data() {
    return {
      localStruct: JSON.parse(JSON.stringify(this.struct)),
    }
  },

  methods: {
    submit() {
      const result = {}

      for (const key in this.localStruct) {
        result[key] = this.localStruct[key].data
      }

      this.$emit('submitted', result)
      console.log(result)
      this.localStruct = JSON.parse(JSON.stringify(this.struct))
    },
  },
}
</script>

<template>
  <form class="container" @submit.prevent="submit">
    <div v-for="(row, idx) of skeleton" :key="idx" class="row">
      <div v-for="(col, key) of row" :key="key" class="col" :class="col">
        <component
          :is="localStruct[key].component"
          :caption="localStruct[key].caption"
          v-model="localStruct[key].data"
          type="text"
          class="validate"
          required
        />
      </div>
    </div>
    <div>
      <MButton caption="Войти" icon="login" />
      <MButton v-if="discardCaption" caption="Войти" icon="login" />
    </div>
  </form>
</template>

<style>
/* div {
  border: 1px solid #000;
} */
</style>
