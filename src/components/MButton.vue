<script>
export default {
  props: ['caption', 'icon'],
  emits: ['click'],
}
</script>

<template>
  <a class="waves-effect waves-light btn" @click="$emit('click')">
    <i v-if="icon" class="material-icons left">{{ icon }}</i>
    <span>{{ caption }}</span>
  </a>
</template>

<style scoped>
a {
  margin: 0 5px;
}
</style>
