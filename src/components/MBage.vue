<script>
export default {
  props: ['caption', 'count'],
  emits: ['click'],
}
</script>

<template>
  <a href="#!" class="collection-item"
    ><span class="badge">{{ count }}</span
    >{{ caption }}</a
  >
</template>

{{ lenth }}
