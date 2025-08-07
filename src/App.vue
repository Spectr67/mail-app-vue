<script>
import MBage from './ui/MBage.vue'
import MButton from './ui/MButton.vue'
import SignInSubmitter from './components/SignInSubmitter.vue'
import SignUpSubmitter from './components/SignUpSubmitter.vue'
import EmailSubmitter from './components/EmailSubmitter.vue'
import { loginAccount } from '@/model/server/interface'
import { sendEmail } from './model/server/interface.js'
import { receiveIncoming, receiveOutcoming } from './model/server/interface.js'
import SignInSubmitterMigrate from './components/SignInSubmitter-migrate.vue'

export default {
  components: {
    SignInSubmitter,
    SignUpSubmitter,
    MBage,
    MButton,
    EmailSubmitter,
    SignInSubmitterMigrate,
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
  },
}
</script>
<template>
  {{ currentUser }}
  {{ incoming }}
  <div class="main">
    <div class="form">
      <div class="leftone">
        <SignUpSubmitter />
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
      <EmailSubmitter @userSendEmail="handleSendEmail" />
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
