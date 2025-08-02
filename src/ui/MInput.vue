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

  mounted() {
    this.$refs.elInput.focus()
  },
}
</script>

<template>
  <div class="input-field">
    <input
      ref="elInput"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="type || 'text'"
      class="validate"
      :id="instanceId"
    />
    <label
      :class="{ active: modelValue !== '' }"
      :for="instanceId"
      class="active"
    >
      {{ caption }}
    </label>
  </div>
</template>
