<script>
export default {
  props: ['formType'],
  emits: ['closeModal'],
  data() {
    return {
      modalInstance: null,
    }
  },
  mounted() {
    this.modalInstance = M.Modal.init(this.$refs.modalRef)
    this.modalInstance.open()
  },
  methods: {
    closeModal() {
      this.modalInstance.close()
      this.$emit('close')
    },
  },
  beforeUnmount() {
    if (this.modalInstance) {
      this.modalInstance.destroy()
    }
  },
}
</script>
<template>
  <div id="modal2" class="modal" ref="modalRef">
    <div class="modal-content">
      <h4>{{ formType === 'login' ? 'Login Form' : 'Registration Form' }}</h4>
      <div>
        <slot name="login" v-if="formType === 'login'"></slot>
        <slot name="registration"></slot>
      </div>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close btn-flat" @click="closeModal">
        Lets Start!
      </a>
    </div>
  </div>
</template>

<style scoped>
.modal {
  border-radius: 16px;
  background-color: rgba(10, 10, 30, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 24px;
  max-width: 500px;
  margin: auto;
}

.modal-content {
  padding: 24px;
}

.modal-content h4 {
  margin-bottom: 16px;
  font-size: 24px;
  color: #ffffff;
  text-align: center;
}

.modal-content p {
  text-align: center;
  font-size: 16px;
  color: #cfcfcf;
}

.modal-footer {
  display: flex;
  justify-content: center;
  padding: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-footer .btn-flat {
  color: #81d4fa;
  font-weight: bold;
}
</style>
