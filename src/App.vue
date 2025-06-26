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
        {
          id: 1,
          title: 'Write Email',
        },
        {
          title: 'adresses',
          id: 2,
        },
        {
          title: 'user Info',
          id: 3,
        },
        {
          title: 'Exit',
          id: 4,
        },
      ],
    }
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
      @add-user="users.push($event), (currentUser = $event)"
    />

    <button @click="isShow = !isShow">switch</button>
    <MTab :list="tabs" />
    <div class="row">
      <
      <div class="collection">
        <MBage
          v-for="(item, key) in currentUser ? currentUser.mail : sortingList"
          :key="key"
          :count="item.count"
          :caption="key"
        />
      </div>

      <div class="universal-window"></div>
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
