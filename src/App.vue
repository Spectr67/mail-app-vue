<script>
import MBage from './ui/MBage.vue'
import MButton from './ui/MButton.vue'
import SignInSubmitterMigrate from './components/SignInSubmitter-migrate.vue'
import SignUpSubmitterMigrate from './components/SignUpSubmitter-migrate.vue'
import EmailSubmitterMigrate from './components/EmailSubmitter-migrate.vue'
import {
  receiveIncoming,
  receiveOutcoming,
  loginAccount,
  sendEmail,
  registerAccount,
} from './model/server/interface.js'

export default {
  components: {
    MBage,
    MButton,
    SignInSubmitterMigrate,
    SignUpSubmitterMigrate,
    EmailSubmitterMigrate,
  },

  data() {
    return {
      incoming: [],
      outcoming: [],
      currentUser: null,
    }
  },
  methods: {
    handleUserLogin(user) {
      const account = loginAccount(user.email, user.password)
      if (account) {
        this.$emit('userLogin', { ...account })
        this.currentUser = account
      }
    },
    handleGetEmail() {
      this.incoming = receiveIncoming(this.currentUser.email).toReversed()
      this.outcoming = receiveOutcoming(this.currentUser.email).toReversed()
    },
    handleSendEmail(email) {
      sendEmail(
        this.currentUser.email,
        email.recipient,
        email.subject,
        email.text
      )
      this.handleGetEmail()
    },
    handleUserRegister(userData) {
      const response = registerAccount(userData)
      if (response) {
        console.log('welcome')
      }
    },
  },
}
</script>
<template>
  {{ currentUser }}
  {{ incoming }}
  <div class="main">
    <div class="form">
      <div class="leftone">
        <SignUpSubmitterMigrate @submitted="handleUserRegister" />
      </div>
      <div class="rightone">
        <SignInSubmitterMigrate @submitted="handleUserLogin" />
      </div>
    </div>
  </div>
  <div class="form">
    <div class="leftone">
      <div class="row">
        <div class="collection">
          <MBage :count="incoming.length" caption="Incoming" />
          <MBage :count="outcoming.length" caption="Outcoming" />
        </div>
      </div>
    </div>
    <div class="rightone">
      <EmailSubmitterMigrate @submitted="handleSendEmail" />
      <MButton caption="get email" @click="handleGetEmail" />
    </div>
  </div>
  <div class="form">
    <div class="leftone">
      <ul>
        <li v-for="(item, idx) of incoming" :key="item.id">{{ item }}</li>
      </ul>
    </div>
    <div class="rightone">
      <ul>
        <li v-for="(item, idx) of outcoming" :key="item.id">{{ item }}</li>
      </ul>
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
  width: 100%;
  height: 450px;
}

.universal-window {
  flex: 1;
  border: 1px solid #000;
  padding: 16px;
  height: 450px;
}
</style>
