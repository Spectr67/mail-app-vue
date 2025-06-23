<script>
document.addEventListener('DOMContentLoaded', function () {
  const elems = document.querySelectorAll('.modal')
  const instances = M.Modal.init(elems)
  instances[0].open()
})
</script>

<template>
  <!-- Модальное окно с нужным классом -->
  <div id="modal1" class="modal custom-modal">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat"
        >Agree</a
      >
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

  background-image: url('./Images/kosmos_zvezdy_tumannost_157030_3840x2400.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  color: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

.modal-overlay {
  display: none !important;
}
</style>
