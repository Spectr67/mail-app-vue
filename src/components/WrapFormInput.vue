<script>
import { BFormFloatingLabel, BFormInput } from 'bootstrap-vue-next'

export default {
  components: { BFormFloatingLabel, BFormInput },
  emits: ['update:modelValue'],
  props: ['type', 'caption', 'modelValue'],
}
</script>

<template>
  <BFormFloatingLabel :label="caption" class="my-2">
    <BFormInput
      :model-value="modelValue"
      @update:model-value="$emit('update:modelValue', $event)"
      :type="type || 'text'"
    />
  </BFormFloatingLabel>
</template>
