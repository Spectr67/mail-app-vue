<script>
import MButton from './MButton.vue'
import MInput from './MInput.vue'

export default {
  components: { MInput, MButton },

  props: ['skeleton'],

  data() {
    return {
      yo: 'yo',
    }
  },
}
</script>

<template>
  <form class="container" @submit.prevent="console.log">
    <div v-for="(row, idx) of skeleton" :key="idx" class="row">
      <div v-for="(col, idx) of row" :key="idx" class="col" :class="col">
        <MInput
          :placeholder="col"
          caption="First Name"
          type="text"
          class="validate"
          v-model="yo"
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
