<script>
import MButton from './MButton.vue'
import MFormRegistration from './MFormRegisrtation.vue'
import MFormLogin from './MFormLogin.vue'

export default {
  components: { MButton, MFormRegistration, MFormLogin },

  props: ['isShow'],

  emits: ['close'],

  data() {
    return {
      instance: null,
      currentForm: 'none',
    }
  },

  watch: {
    isShow(value) {
      if (value) {
        this.instance.open()
        this.currentForm = 'none'
      } else {
        this.instance.close()
      }
    },
  },

  mounted() {
    const elem = this.$refs.elModal
    const options = {
      onCloseStart: () => this.$emit('close'),
    }
    this.instance = M.Modal.init(elem, options)
    if (this.isShow) {
      this.instance.open()
    }
  },
}
</script>

<template>
  <div ref="elModal" class="modal">
    <div class="modal-content">
      <template v-if="currentForm === 'none'">
        <h4>Welcome to the Space Mail</h4>
        <p>A new experience of Email</p>
        <MButton caption="Login" @click="currentForm = 'login'" />
        <MButton caption="Registrate" @click="currentForm = 'register'" />
      </template>

      <template v-else-if="currentForm === 'register'">
        <MFormRegistration @close="currentForm = 'none'" />
      </template>

      <template v-else-if="currentForm === 'login'">
        <MFormLogin @close="currentForm = 'none'" />
      </template>
    </div>
  </div>
</template>
