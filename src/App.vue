<script>
import MBage from './components/MBage.vue'
import MButton from './components/MButton.vue'
import SignInSubmitter from './components/SignInSubmitter.vue'
import SignUpSubmitter from './components/SignUpSubmitter.vue'
import EmailSubmitter from './components/EmailSubmitter.vue'
import { sendEmail } from './model/server/interface.js'
import { receiveIncoming, receiveOutcoming } from './model/server/interface.js'

export default {
  components: {
    SignInSubmitter,
    SignUpSubmitter,
    MBage,
    MButton,
    EmailSubmitter,
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
        <SignInSubmitter @user-login="handleUserLogin" />
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
