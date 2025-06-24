<script>
import ModalWindow from './components/ModalWindow.vue'

export default {
  components: { ModalWindow },

  data() {
    return {
      isShowA: false,
      isShowB: false,
    }
  },
}
</script>
<template>
  <div>
    <ModalWindow :is-show="isShowA" @close="isShowA = false" />
  </div>
  <div>
    <ModalWindow :is-show="isShowB" @close="isShowB = false" />
  </div>
  <div>
    <button @click="isShowA = !isShowA">switch</button>
  </div>
  <div>
    <button @click="isShowB = !isShowB">switch</button>
  </div>
  <div>
    {{ isShowA }}
  </div>
  <div>
    {{ isShowB }}
  </div>
</template>
