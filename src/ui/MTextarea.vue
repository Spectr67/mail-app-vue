<script>
const randId = () => 'id_' + Math.trunc(Math.random() * 0xff ** 4).toString(16)

export default {
  props: ['modelValue', 'caption', 'type'],

  emits: ['update:modelValue'],

  data() {
    return {
      instanceId: randId(),
    }
  },
}
</script>

<template>
  <div class="input-field">
    <textarea
      :id="instanceId"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="materialize-textarea"
    ></textarea>
    <label :for="instanceId">{{ caption }}</label>
  </div>
</template>
