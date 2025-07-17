<script>
import MFormLogin from './components/MFormLogin.vue'
import MFormRegistration from './components/MFormRegisrtation.vue'
import MForm from './components/MForm.vue'

export default {
  components: {
    MForm,
    MFormLogin,
    MFormRegistration,
  },
  data() {
    return {
      serverSubmit: false,
      accounts: [],
      mail: [],
      currentUser: null,
    }
  },
  methods: {
    handleUserSubmit(account) {
      if (this.serverSubmit) {
        this.accounts.push(account)
      }
    },
    handleServerSubmit(response) {
      this.serverSubmit = response
    },
    handleUserLogin(user) {
      this.currentUser = user
      console.log('User', user)
    },
  },
}
</script>

<template>
  {{ accounts }}

  <div class="main">
    <div class="form">
      <div class="leftone">
        <MFormRegistration
          @userSubmit="handleUserSubmit"
          @serverSubmit="handleServerSubmit"
          :accounts="accounts"
        />
      </div>
      <div class="rightone">
        <MFormLogin @userLogin="handleUserLogin" :accounts="accounts" />
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
