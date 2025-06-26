<script>
export default {
  props: ['list'],
  mounted() {
    const el = this.$refs.tabs
    requestAnimationFrame(() => {
      M.Tabs.init(el, { swipeable: true })
    })
  },
}
</script>

<template>
  <div class="row">
    <div class="col s12">
      <ul class="tabs" ref="tabs">
        <li class="tab col s3" v-for="item in list" :key="item.id">
          <a :href="'#tab-' + item.id">{{ item.title }}</a>
        </li>
      </ul>
    </div>

    <div
      class="col s12"
      v-for="item in list"
      :key="item.id"
      :id="'tab-' + item.id"
    ></div>
  </div>
</template>

<style scoped>
.row {
  border: 1px solid #000;
}
</style>
