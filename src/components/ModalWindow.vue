<script>
const makeId = () => ((Math.random() * 0xffff_ffff) >>> 0).toString(16)

const initUser = () => ({
  id: makeId(),
  email: '',
  password: '',
  firstName: '',
  secondName: '',
  mail: {
    incoming: { count: 0 },
    favorites: { count: 0 },
    spam: { count: 0 },
    outconimg: { count: 0 },
    drafts: { count: 0 },
    dump: { count: 0 },
  },
})

import MButton from './MButton.vue'
import MFormRegistration from './MFormRegisrtation.vue'
import MFormLogin from './MFormLogin.vue'

export default {
  components: { MButton, MFormRegistration, MFormLogin },

  props: ['isShow', 'accounts', 'currentUser'],

  emits: ['close', 'add-user'],

  data() {
    return {
      instance: null,
      currentForm: 'none',
      user: initUser(),
    }
  },

  watch: {
    isShow(value) {
      if (value) {
        this.instance.open()
        this.currentForm = 'none'
      } else {
        this.instance.close()
      }
    },
  },

  mounted() {
    const elem = this.$refs.elModal
    const options = {
      onCloseStart: () => this.$emit('close'),
    }
    this.instance = M.Modal.init(elem, options)
    if (this.isShow) {
      this.instance.open()
    }
  },
  methods: {
    handleUserSubmit(userData) {
      const findedAccount = this.accounts.find(a => a.email === userData.email)
      if (findedAccount) return
      const newUser = initUser()
      newUser.firstName = userData.firstName
      newUser.secondName = userData.lastName
      newUser.email = userData.email
      newUser.password = userData.password
      this.$emit('add-user', newUser)
      this.currentForm = 'login'
    },
    handleUserLogin(loginData) {
      const found = this.accounts.find(
        a => a.email === loginData.email && a.password === loginData.password
      )
      if (found) {
        this.$emit('close')
        this.instance.close()
      }
    },
  },
}
</script>

<template>
  <div ref="elModal" class="modal">
    <div class="modal-content">
      <template v-if="currentForm === 'none'">
        <h4>Welcome to the Space Mail</h4>
        <p>A new experience of Email</p>
        <MButton caption="Login" @click="currentForm = 'login'" />
        <MButton caption="Registrate" @click="currentForm = 'register'" />
      </template>

      <template v-else-if="currentForm === 'register'">
        <MFormRegistration
          @close="currentForm = 'none'"
          @userSubmit="handleUserSubmit"
        />
      </template>

      <template v-else-if="currentForm === 'login'">
        <MFormLogin
          @close="currentForm = 'none'"
          @userLogin="handleUserLogin"
        />
      </template>
    </div>
  </div>
</template>
