<script>
export default {
  props: ['caption', 'icon'],
}
</script>

<template>
  <button type="submit" class="waves-effect waves-light btn">
    <i v-if="icon" class="material-icons left">{{ icon }}</i>
    <span>{{ caption }}</span>
  </button>
</template>

<style scoped>
a {
  margin: 0 5px;
}
</style>
