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
}
</script>

<template>
  <BAccordion>
    <BAccordionItem title="Accordion Item #1" visible>
      <BButtonToolbar justify aria-label="Toolbar with justify">
        <BButtonGroup class="mx-1">
          <BButton>Reply</BButton>
          <BButton>Send</BButton>
          <BButton>Delite</BButton>
        </BButtonGroup>
        <BDropdown class="mx-1" placement="right" text="sort">
          <BDropdownItem>spam</BDropdownItem>
          <BDropdownItem>favorite</BDropdownItem>
          <BDropdownItem>Important</BDropdownItem>
        </BDropdown>
      </BButtonToolbar>
      <strong>This is the first item's accordion body.</strong> It is shown by
      default, until the collapse plugin adds the appropriate classes that we
      use to style each element. These classes control the overall appearance,
      as well as the showing and hiding via CSS transitions. You can modify any
      of this with custom CSS or overriding our default variables. It is also
      worth noting that just about any HTML can go within the
      <code>.accordion-body</code>, though the transition does limit overflow.
    </BAccordionItem>
    <BAccordionItem title="Accordion Item #2">
      <strong>This is the second item's accordion body.</strong> It is hidden by
      default, until the collapse plugin adds the appropriate classes that we
      use to style each element. These classes control the overall appearance,
      as well as the showing and hiding via CSS transitions. You can modify any
      of this with custom CSS or overriding our default variables. It is also
      worth noting that just about any HTML can go within the
      <code>.accordion-body</code>, though the transition does limit overflow.
    </BAccordionItem>
    <BAccordionItem title="Accordion Item #3">
      <strong>This is the third item's accordion body.</strong> It is hidden by
      default, until the collapse plugin adds the appropriate classes that we
      use to style each element. These classes control the overall appearance,
      as well as the showing and hiding via CSS transitions. You can modify any
      of this with custom CSS or overriding our default variables. It is also
      worth noting that just about any HTML can go within the
      <code>.accordion-body</code>, though the transition does limit overflow.
    </BAccordionItem>
  </BAccordion>
</template>
