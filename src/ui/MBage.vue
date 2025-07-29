<script>
export default {
  props: ['caption', 'count'],
  emits: ['click'],
}
</script>

<template>
  <a href="#!" class="collection-item" @click="$emit('click', caption)"
    ><span class="badge">{{ count }}</span
    >{{ caption }}</a
  >
</template>
