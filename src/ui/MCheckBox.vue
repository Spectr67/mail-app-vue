<script>
export default {
  props: ['modelValue', 'caption'],

  emits: ['update:model-value'],
}
</script>

<template>
  <div>
    <label>
      <input
        type="checkbox"
        class="filled-in"
        :value="caption"
        :checked="modelValue"
        @change="$emit('update:model-value', $event.target.checked)"
      />
      <span>{{ caption }}</span>
    </label>
  </div>
</template>
