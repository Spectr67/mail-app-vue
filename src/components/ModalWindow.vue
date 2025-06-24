<script>
export default {
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
  },
}
</script>

<template>
  <div ref="elModal" class="modal">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">
        Agree
      </a>
    </div>
  </div>
</template>
