<script>
export default {
  props: ['list', 'name', 'modelValue'],
  emits: ['update:modelValue'],
  mounted() {
    const el = this.$refs.select
    M.FormSelect.init(el)
  },
}
</script>

<template>
  <div class="input-field">
    <select
      ref="select"
      :value="modelValue"
      @change="$emit('update:modelValue', event.target.value)"
    >
      <option value="" disabled selected>{{ name }}</option>
      <option v-for="(item, idx) in list" :key="idx" :value="item.value">
        {{ item.caption }}
      </option>
    </select>
    <label>{{ name }}</label>
  </div>
</template>
