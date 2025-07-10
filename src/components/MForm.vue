<script>
import MInput from './MInput.vue'

export default {
  components: { MInput },

  data() {
    return {
      nickname: 'Vasya',
    }
  },
}
</script>

<template>
  <form class="container">
    <div class="row">
      <div class="col s6">
        <MInput v-model="nickname" caption="Ваше имя" />
      </div>
      <div class="col s6">
        <MInput v-model="nickname" caption="Ваше имя" />
      </div>
      <div class="col s12">
        <MInput v-model="nickname" caption="Ваше имя" />
      </div>
      <div class="col s4">
        <MInput v-model="nickname" caption="Ваше имя" />
      </div>
      <div class="col s4">
        <MInput v-model="nickname" caption="Ваше имя" />
      </div>
      <div class="col s4">
        <MInput v-model="nickname" caption="Ваше имя" />
      </div>
    </div>
  </form>
</template>
