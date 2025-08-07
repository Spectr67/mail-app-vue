<script>
import MButton from './MButton.vue'
import MInput from './MInput.vue'
import MSwitch from './MSwitch.vue'
import MCheckBox from './MCheckBox.vue'

export default {
  components: { MInput, MButton, MSwitch, MCheckBox },

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
  <form class="container" @submit.prevent="submit">
    <div v-for="(row, idx) of skeleton" :key="idx" class="row">
      <div v-for="(col, key) of row" :key="key" class="col" :class="col">
        <component
          :is="localStruct[key].component"
          :caption="localStruct[key].caption"
          v-model="localStruct[key].data"
          :type="localStruct[key].type"
          class="validate"
          required
        />
      </div>
    </div>
    <div>
      <MButton :caption="confirmCaption" :icon="confirmIcon" />
      <MButton
        v-if="discardCaption"
        :caption="discardCaption"
        :icon="discardIcon"
      />
    </div>
  </form>
</template>

<style scoped>
div {
  border: 1px solid fuchsia;
}
</style>
