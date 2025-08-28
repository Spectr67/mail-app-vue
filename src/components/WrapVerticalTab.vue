<script>
import { BButton, BCard, BCardBody, BTab, BTabs } from 'bootstrap-vue-next'
import EmailSubmitterMigrate from './EmailSubmitter-migrate.vue'
import WrapAccordion from './WrapAccordion.vue'

export default {
  components: {
    BTab,
    BCard,
    BCardBody,
    BTabs,
    BButton,
    EmailSubmitterMigrate,
    WrapAccordion,
  },
}
</script>

<template>
  <BCard no-body>
    <BTabs pills card vertical nav-wrapper-class="w-50">
      <BTab title="Tab 1" active
        ><BCardBody
          ><div><EmailSubmitterMigrate /></div></BCardBody
      ></BTab>
      <BTab title="Tab 2"
        ><BCardBody><WrapAccordion /></BCardBody
      ></BTab>
      <BTab title="Tab 3"><BCardBody>Tab contents 3</BCardBody></BTab>
    </BTabs>
  </BCard>
</template>
