<script>
import MButton from './MButton.vue'
import MInput from './MInput.vue'

export default {
  components: { MInput, MButton },

  props: ['skeleton', 'struct'],

  emits: ['submitted'],

  data() {
    return {
      localStruct: JSON.parse(JSON.stringify(this.struct)),
    }
  },

  watch: {
    struct(val) {
      this.localStruct = JSON.parse(JSON.stringify(val))
    },
  },

  methods: {
    submit() {
      this.$emit('submitted', JSON.parse(JSON.stringify(this.localStruct)))
      this.localStruct = JSON.parse(JSON.stringify(this.struct))
    },
  },
}
</script>

<template>
  {{ struct }}
  <form class="container" @submit.prevent="submit">
    <div v-for="(row, idx) of skeleton" :key="idx" class="row">
      <div v-for="(col, key) of row" :key="key" class="col" :class="col">
        {{ key }}
        <MInput
          :placeholder="col"
          :caption="localStruct[key].caption"
          type="text"
          class="validate"
          v-model="localStruct[key].data"
          required
        />
      </div>
    </div>
    <div>
      <MButton caption="Войти" icon="login" />
    </div>
  </form>
</template>

<style>
/* div {
  border: 1px solid #000;
} */
</style>
