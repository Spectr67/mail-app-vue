<script>
import {
  BBadge,
  BButton,
  BCard,
  BCardBody,
  BTab,
  BTabs,
} from 'bootstrap-vue-next'
import WrapAccordion from './WrapAccordion.vue'
import EmailSubmitterMigrate from './EmailSubmitter-migrate.vue'

export default {
  components: {
    BTab,
    BCard,
    BCardBody,
    BTabs,
    BButton,
    WrapAccordion,
    EmailSubmitterMigrate,
  },
  props: ['incoming', 'outcoming'],
  emits: ['reply'],
  methods: {
    replyEmail(email) {
      this.$emit('reply', email)
    },
  },
}
</script>
<template>
  <BCard no-body class="tabs-container">
    <BTabs pills card vertical nav-wrapper-class="w-50">
      <BTab title="incoming : 0" active
        ><BCardBody
          ><WrapAccordion
            :emails="incoming"
            @reply="replyEmail"
          ></WrapAccordion></BCardBody
      ></BTab>
      <BTab title="outcoming"
        ><BCardBody>
          <WrapAccordion :emails="outcoming"></WrapAccordion> </BCardBody
      ></BTab>
      <BTab title="spam"><BCardBody>Tab contents 3</BCardBody></BTab>
      <BTab title="favorite"><BCardBody>Tab contents 3</BCardBody></BTab>
      <BTab title="important"><BCardBody>Tab contents 3</BCardBody></BTab>
      <BTab title="drafts"><BCardBody>Tab contents 3</BCardBody></BTab>
      <BTab title="trash"><BCardBody>Tab contents 3</BCardBody></BTab>
    </BTabs>
  </BCard>
</template>

<style>
.tab-content .tab-content {
  width: 50%;
}
</style>
