<script>
import { BTab } from 'bootstrap-vue-next'
import { BTabs } from 'bootstrap-vue-next'
import {
  BAccordion,
  BAccordionItem,
  BButton,
  BButtonGroup,
  BButtonToolbar,
  BDropdown,
  BDropdownItem,
} from 'bootstrap-vue-next'
import WrapVerticalTab from './WrapVerticalTab.vue'
import WrapAccordion from './WrapAccordion.vue'
import { BCardBody } from 'bootstrap-vue-next'
import { BCard } from 'bootstrap-vue-next'

export default {
  components: {
    BAccordion,
    BAccordionItem,
    BButton,
    BButtonToolbar,
    BButtonGroup,
    BDropdownItem,
    BDropdown,
    BTab,
    BTabs,
    WrapVerticalTab,
    WrapAccordion,
    BCardBody,
    BCard,
  },
}
</script>

<template>
  <BCard no-body class="tabs-container qqqqs">
    <BTabs pills card vertical>
      <BTab title="incoming" active>
        <BCardBody class="col-12">
          <WrapAccordion
            :emails="[
              { subject: 'q', text: 'qqq' },
              { subject: 'q', text: 'qqq' },
              { subject: 'q', text: 'qqq' },
            ]"
          >
          </WrapAccordion>
        </BCardBody>
      </BTab>
    </BTabs>
  </BCard>
</template>

<style>
.qqqqs > .d-flex > div {
  flex: 1;
}
</style>
