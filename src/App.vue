<script>
import MBage from './components/MBage.vue'
import MInput from './components/MInput.vue'
import ModalWindow from './components/ModalWindow.vue'
import MTab from './components/MTab.vue'
import MFormLogin from './components/MFormLogin.vue'
import MFormRegistration from './components/MFormRegisrtation.vue'

export default {
  components: {
    MInput,
    MTab,
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
      accounts: [],
      mail: [],
      currentUser: null,
      sortingList: {
        incoming: { count: 421 },
        favorites: { count: 123 },
        spam: { count: 23 },
        outconimg: { count: 54 },
        drafts: { count: 45 },
        dump: { count: 1234 },
      },
    }
  },
  methods: {
    handleUserSubmit(userData) {
      
    }
  }
}
</script>

<template>
  {{ accounts }}
  <div class="main">
    <div class="form">
      <div class="leftone">
        <MFormRegistration @userSubmit="handleUserSubmit" />
      </div>
      <div class="rightone">
        <MFormLogin @userLogin="handleUserLogin" />
      </div>
    </div>
    <button @click="isShow = !isShow">switch</button>
    <!-- <MTab :list="tabs" @tab-change="activeTab = $event" /> -->
  </div>
</template>

<style scoped>
.form {
  width: 100%;
  display: flex;
  gap: 20px;
}
.leftone,
.rightone {
  width: 50%;
  height: 450px;
  border: 1px solid #000;
  margin: 15px;
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
