<script>
import MButton from './MButton.vue'

// document.addEventListener('DOMContentLoaded', function () {
//   const elems = document.querySelectorAll('.modal')
//   const instances = M.Modal.init(elems)
//   instances[0].open()
// })

export default {
  name: 'ModalComponent',
  components: {
    MButton,
  },
  data() {
    return {}
  },
}
</script>

<template>
  <div id="modal1" class="modal custom-modal">
    <div class="modal-content">
      <h2>Welcome to the SpaceMail</h2>
      <h5>A new expirience of emal app</h5>
    </div>
    <div class="modal-footer">
      <div>
        <MButton
          caption="Login"
          class="waves-effect waves-light btn modal-trigger"
          href="#modal2"
          @click="$emit('open-form', 'login')"
        />
        <MButton
          caption="Registration"
          class="waves-effect waves-light btn modal-trigger"
          href="#modal2"
          @click="$emit('open-form', 'registration')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-modal {
  width: 1200px;
  height: 960px;
  max-height: none;
  border-radius: 20px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  position: top -100px;
  position: absolute;

  /* background-image: url('./Images/kosmos_zvezdy_tumannost_157030_3840x2400.jpg'); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* color: white; */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

.modal-overlay {
  display: none !important;
}
</style>
