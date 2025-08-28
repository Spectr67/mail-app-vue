<script>
import {
  BAccordion,
  BAccordionItem,
  BButton,
  BButtonGroup,
  BButtonToolbar,
  BDropdown,
  BDropdownItem,
} from 'bootstrap-vue-next'

export default {
  components: {
    BAccordion,
    BAccordionItem,
    BButton,
    BButtonToolbar,
    BButtonGroup,
    BDropdownItem,
    BDropdown,
  },
  props: ['emails'],
}
</script>

<template>
  <BAccordion>
    <BAccordionItem
      v-for="(email, index) in emails"
      :key="index"
      :id="'email-' + index"
      :title="email.subject"
    >
      <BButtonToolbar justify aria-label="Toolbar with justify">
        <BButtonGroup class="mx-1">
          <BButton>Reply</BButton>
          <BButton>Send</BButton>
          <BButton>Delete</BButton>
        </BButtonGroup>
        <BDropdown class="mx-1" placement="right" text="sort">
          <BDropdownItem>spam</BDropdownItem>
          <BDropdownItem>favorite</BDropdownItem>
          <BDropdownItem>Important</BDropdownItem>
        </BDropdown>
      </BButtonToolbar>
      <div>{{ email.text }}</div>
    </BAccordionItem>
  </BAccordion>
</template>
