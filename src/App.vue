<script>
import MFormLogin from './components/MFormLogin.vue'
import MFormRegistration from './components/MFormRegisrtation.vue'

export default {
  components: {
    MFormLogin,
    MFormRegistration,
  },
  data() {
    return {
      serverSubmit: false,
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
  {{ currentUser }}
  <div class="main">
    <div class="form">
      <div class="leftone">
        <MFormRegistration
          @user-submit="handleUserSubmit"
          @server-submit="handleServerSubmit"
        />
      </div>
      <div class="rightone">
        <MFormLogin @user-login="handleUserLogin" />
      </div>
    </div>
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
