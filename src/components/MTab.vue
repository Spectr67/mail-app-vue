<script>
export default {
  props: ['list'],
  data() {
    return {
      activeTabId: null,
    }
  },
  emits: ['tab-change'],
  mounted() {
    const el = this.$refs.tabs
    requestAnimationFrame(() => {
      M.Tabs.init(el, {
        onShow: tab => {
          const id = tab.id.replace('tab-', '')
          this.activeTabId = Number(id)
          this.$emit('tab-change', this.activeTabId)
        },
      })
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
      :key="'content-' + item.id"
      :id="'tab-' + item.id"
      style="display: none"
    />
  </div>
</template>

<style scoped>
.row {
  border: 1px solid #000;
}
</style>
