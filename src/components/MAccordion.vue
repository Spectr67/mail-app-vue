<script>
export default {
  props: ['list'],

  mounted() {
    const el = this.$refs.elUl
    const options = { accordion: true }
    M.Collapsible.init(el, options)
  },
}
</script>

<template>
  <ul ref="elUl" class="collapsible">
    <li v-for="item of list" :key="item.id">
      <div class="collapsible-header">
        <i class="material-icons">{{ item.title }}</i>
        <slot name="header" :item="item"></slot>
      </div>
      <div class="collapsible-body">
        <!-- <slot name="body" :item="item"></slot> -->
      </div>
    </li>
  </ul>
</template>
