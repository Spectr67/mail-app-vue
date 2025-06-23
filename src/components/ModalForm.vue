<script>
import MButton from './MButton.vue'

export default {
  components: {
    MButton,
  },
  mounted() {
    const elems = this.$el.querySelectorAll('.modal') // <-- фикс
    M.Modal.init(elems)
  },
}
</script>

<template>
  <!-- Кнопка для открытия модалки -->
  <a class="waves-effect waves-light btn modal-trigger" href="#modal2">
    Открыть модалку
  </a>

  <!-- Модальное окно -->
  <div id="modal2" class="modal">
    <!-- <-- фикс тут -->
    <div class="modal-content">
      <h4>Заголовок модалки</h4>
      <p>Текст внутри модального окна</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">
        Закрыть
      </a>
    </div>
  </div>
</template>

<style scoped>
.modal {
  border-radius: 12px;
}
</style>
