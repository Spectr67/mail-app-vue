<script>
import MInput from './components/MInput.vue'
import ModalComponent from './components/ModalComponent.vue'
import ModalForm from './components/ModalForm.vue'
import MTab from './components/MTab.vue'
import TestArea from './TestArea.vue'

export default {
  components: { ModalComponent, ModalForm, MInput, MTab, TestArea },

  data() {
    return {
      showModal: false,
      formType: '',
      tabs: [
        {
          id: 1,
          title: 'Write Email',
        },
        {
          title: 'adresses',
          id: 2,
        },
        {
          title: 'user Info',
          id: 3,
        },
        {
          title: 'Exit',
          id: 4,
        },
      ],
    }
  },

  methods: {
    openForm(type) {
      this.formType = type
      this.showModal = true
    },
  },
}
</script>

<template>
  <TestArea />
  <!-- <div class="main">
    <h1>heee</h1>
    <ModalComponent @open-form="openForm" />
    <MTab :list="tabs" />
    <ModalForm v-if="showModal" :type="formType" @close="showModal = false">
      <slot name="login">
        <MInput />
        <MInput />
      </slot>

      <slot name="registration">
        <MInput />
        <MInput />
        <MInput />
        <MInput />
      </slot>
    </ModalForm>
    <div class="collection">
      <MBage count="354" caption="Span" /> 
    </div>
  </div> -->
</template>

<!-- <style>
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
  /* background-image: url('/src/components/Images/kosmos_zvezdy_tumannost_157030_3840x2400.jpg'); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* color: white; */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}
</style> -->
