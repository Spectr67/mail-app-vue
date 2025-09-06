<script>
import SignInSubmitterMigrate from './components/SignInSubmitter-migrate.vue'
import SignUpSubmitterMigrate from './components/SignUpSubmitter-migrate.vue'
import EmailSubmitterMigrate from './components/EmailSubmitter-migrate.vue'
import WrapTab from './components/WrapTab.vue'
import {
  receiveIncoming,
  receiveOutcoming,
  loginAccount,
  sendEmail,
  registerAccount,
} from './model/server/interface.js'
import WrapVerticalTab from './components/WrapVerticalTab.vue'

export default {
  components: {
    SignInSubmitterMigrate,
    SignUpSubmitterMigrate,
    EmailSubmitterMigrate,
    WrapTab,
    WrapVerticalTab,
  },

  data() {
    return {
      incoming: [],
      outcoming: [],
      currentAccount: null,
      emailAddressesList: [],
    }
  },
  methods: {
    handleAccountLogin(accountDTo) {
      const account = loginAccount(accountDTo.emailAddress, accountDTo.password)
      if (account) {
        this.$emit('accountLogin', { ...account })
        this.currentAccount = account
      }
    },
    handleAccountRegister(accountData) {
      const response = registerAccount(accountData)
      if (response) {
        console.log('welcome')
      }
    },
    handleAccountLogout() {
      this.currentAccount = null
    },

    handleGetEmail() {
      this.incoming = receiveIncoming(
        this.currentAccount.emailAddress
      ).toReversed()
      this.outcoming = receiveOutcoming(
        this.currentAccount.emailAddress
      ).toReversed()
      this.getEmailAddressesList()
    },
    getEmailAddressesList() {
      const allEmails = [...this.incoming, ...this.outcoming]
      const emailList = allEmails.flatMap(e => [e.sender, e.recipient])
      const result = [...new Set(emailList)]
      this.emailAddressesList = result
      console.log(this.emailAddressesList)
    },
    handleSendEmail(emailDto) {
      sendEmail(
        this.currentAccount.emailAddress,
        emailDto.recipient,
        emailDto.subject,
        emailDto.text
      )
      this.handleGetEmail()
    },
  },
}
</script>
<template>
  {{ emailAddressesList }}
  {{ currentAccount }}
  <div class="main">
    <div>
      <WrapTab
        @register="handleAccountRegister($event)"
        @login="handleAccountLogin($event)"
        @logout="handleAccountLogout"
        @getemail="handleGetEmail"
        @emailSubmitted="handleSendEmail($event)"
        :currentAccount="currentAccount"
        :incoming="incoming"
        :outcoming="outcoming"
        :list="emailAddressesList"
      />
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
