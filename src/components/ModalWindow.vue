<script>
import MButton from './MButton.vue'

export default {
  components: { MButton },

  props: ['isShow'],

  emits: ['close'],

  data() {
    return {
      instance: null,
    }
  },

  watch: {
    isShow(value) {
      if (value) {
        this.instance.open()
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
      <h4>Welcome to the Space Mail</h4>
      <p>A new experience of Email</p>
    </div>
    <MButton caption="Login" />
    <MButton caption="Registrate" />
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">
        Agree
      </a>
    </div>
  </div>
</template>
