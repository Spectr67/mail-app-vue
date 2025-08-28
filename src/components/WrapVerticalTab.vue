<script>
import { BButton, BCard, BCardBody, BTab, BTabs } from 'bootstrap-vue-next'
import WrapAccordion from './WrapAccordion.vue'

export default {
  components: {
    BTab,
    BCard,
    BCardBody,
    BTabs,
    BButton,
    WrapAccordion,
  },
  props: ['incoming', 'outcoming'],
}
</script>
<template>
  <BCard no-body class="tabs-container">
    <BTabs pills card vertical nav-wrapper-class="w-50">
      <BTab title="incoming" active
        ><BCardBody
          ><WrapAccordion :emails="incoming"></WrapAccordion></BCardBody
      ></BTab>
      <BTab title="outcoming"
        ><BCardBody>
          <WrapAccordion :emails="outcoming"></WrapAccordion> </BCardBody
      ></BTab>
      <BTab title="spam"><BCardBody>Tab contents 3</BCardBody></BTab>
    </BTabs>
  </BCard>
</template>
