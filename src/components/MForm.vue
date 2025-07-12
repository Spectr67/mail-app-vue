<script>
import MInput from './MInput.vue'

export default {
  components: { MInput },

  props: ['skeleton'],

  data() {
    return {}
  },
}
</script>

<template>
  <form class="container" @submit.prevent="console.log">
    <div v-for="(val, key) in skeleton" :key="key" class="row">
      <div v-for="(item, idx) of val" :key="idx" class="col" :class="item">
        {{ item }}
        <!-- <MInput caption="First Name" type="text" class="validate" required /> -->
      </div>
    </div>
  </form>
</template>

<style>
div {
  border: 1px solid #000;
}
</style>
