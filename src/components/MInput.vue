<script>
const randId = () => 'id_' + Math.trunc(Math.random() * 0xff ** 4).toString(16)

export default {
  props: ['modelValue', 'caption'],

  emits: ['update:modelValue'],

  data() {
    return {
      instanceId: randId(),
    }
  },
}
</script>

<template>
  <div class="row">
    <div class="input-field col s6">
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        type="text"
        class="validate"
        :id="instanceId"
      />
      <label :class="{ active: modelValue !== '' }" :for="instanceId">
        {{ caption }}
      </label>
    </div>
  </div>
</template>
