<script>
import ModalComponent from './components/ModalComponent.vue'
export default {
  components: {
    ModalComponent,
  },
}
</script>

<template>
  <div class="main">
    <h1>heee</h1>
    <ModalComponent />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f2f2f2;
}
.main {
  width: 1200px;
  height: 960px;
  background-color: white;
  border: 1px solid #000;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  box-sizing: border-box;
  background-image: url('/src/components/Images/kosmos_zvezdy_tumannost_157030_3840x2400.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  color: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}
</style>
