<script>
export default {
  props: ['list', 'caption', 'modelValue'],
  emits: ['update:modelValue'],
  mounted() {
    const elSelect = this.$refs.elSelect
    M.FormSelect.init(elSelect)
  },
}
</script>

<template>
  <div class="input-field">
    <select
      ref="elSelect"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option value="" disabled hidden>{{ caption }}</option>
      <option
        :selected="modelValue === item"
        v-for="(item, idx) in list"
        :key="idx"
        :value="item"
      >
        {{ item }}
      </option>
    </select>
    {{ modelValue }}
  </div>
</template>
<!-- selected -->
