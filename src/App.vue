<script>
import MBage from './components/MBage.vue'
import MButton from './components/MButton.vue'
import MFormLogin from './components/MFormLogin.vue'
import MFormRegistration from './components/MFormRegisrtation.vue'
import MFormSendEmail from './components/MFormSendEmail.vue'
import { sendEmail } from './model/server/interface.js'
import {
  receiveEmails,
  receiveIncoming,
  receiveOutcoming,
} from './model/server/interface.js'

export default {
  components: {
    MFormLogin,
    MFormRegistration,
    MBage,
    MButton,
    MFormSendEmail,
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
      this.currentUser = user
    },
    handleGetEmail() {
      this.incoming = receiveIncoming(this.currentUser.email)
      this.outcoming = receiveOutcoming(this.currentUser.email)
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
  {{ outcoming }}
  <div class="main">
    <div class="form">
      <div class="leftone">
        <MFormRegistration />
      </div>
      <div class="rightone">
        <MFormLogin @user-login="handleUserLogin" />
      </div>
    </div>
  </div>
  <div class="row">
    <div class="collection">
      <MBage :count="incoming.length" caption="Incoming" />
      <MBage :count="outcoming.length" caption="Outcoming" />
      <MFormSendEmail @userSendEmail="handleSendEmail" />
    </div>
    <MButton caption="get email" @click="handleGetEmail" />
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
