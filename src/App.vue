<script>
import MBage from './components/MBage.vue'
import MInput from './components/MInput.vue'
import ModalWindow from './components/ModalWindow.vue'
import MTab from './components/MTab.vue'
import TestArea from './TestArea.vue'
import MFormLogin from './components/MFormLogin.vue'
import MFormRegistration from './components/MFormRegisrtation.vue'

export default {
  components: {
    MInput,
    MTab,
    TestArea,
    ModalWindow,
    MBage,
    MFormLogin,
    MFormRegistration,
  },
  data() {
    return {
      isShow: true,
      activeTab: 1,
      universalWindowContent: '',
      users: [],
      currentUser: null,
      sortingList: {
        incoming: { count: 421 },
        favorites: { count: 123 },
        spam: { count: 23 },
        outconimg: { count: 54 },
        drafts: { count: 45 },
        dump: { count: 1234 },
      },
      tabs: [
        { id: 1, title: 'Write Email' },
        { id: 2, title: 'adresses' },
        { id: 3, title: 'example@mail' },
        { id: 4, title: 'Exit' },
      ],
    }
  },
  methods: {
    handleBageClick(type) {
      const map = {
        incoming: 5,
        favorites: 6,
        spam: 7,
        outconimg: 8,
        drafts: 9,
        dump: 10,
      }
      this.activeTab = map[type] || 0
    },
  },
  computed: {
    activeTabContent() {
      const contentMap = {
        1: 'Write Email content',
        2: 'Addresses content',
        3: 'User Info content',
        4: 'Exit content',
        5: 'incoming',
        6: 'favorites',
        7: 'spam',
        8: 'outconimg',
        9: 'drafts',
        10: 'dump',
      }
      return contentMap[this.activeTab] || 'No content selected'
    },
  },
}
</script>

<template>
  {{ isShow }}
  {{ currentUser }}
  <div class="main">
    <ModalWindow
      :is-show="isShow"
      @close="isShow = false"
      :users="users"
      @add-user="
        users.push($event),
          (currentUser = $event),
          (tabs[2].title = $event.email)
      "
    />

    <button @click="isShow = !isShow">switch</button>
    <MTab :list="tabs" @tab-change="activeTab = $event" />

    <div class="row">
      <div class="collection">
        <MBage
          v-for="(item, key) in currentUser ? currentUser.mail : sortingList"
          :key="key"
          :count="item.count"
          :caption="key"
          @click="handleBageClick"
        />
      </div>

      <div class="universal-window">
        {{ activeTabContent }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  gap: 20px;
}

.collection {
  width: 25%;
  height: 450px;
}

.universal-window {
  flex: 1;
  border: 1px solid #000;
  padding: 16px;
  height: 450px;
}
</style>
