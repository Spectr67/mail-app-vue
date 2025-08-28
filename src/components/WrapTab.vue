<script>
import { BTabs, BTab, BButton } from 'bootstrap-vue-next'
import SignInSubmitterMigrate from './SignInSubmitter-migrate.vue'
import SignUpSubmitterMigrate from './SignUpSubmitter-migrate.vue'

export default {
  components: {
    BTabs,
    BTab,
    BButton,
    SignInSubmitterMigrate,
    SignUpSubmitterMigrate,
  },
  emits: ['register', 'login', 'logout'],
  props: ['currentUser'],
  data() {
    return {
      tabIndex: 0,
    }
  },
  methods: {
    register(user) {
      this.$emit('register', user)
    },

    login(user) {
      this.$emit('login', user)
      this.$nextTick(() => {
        this.tabIndex = 3
      })
    },

    logout() {
      this.$emit('logout')
      console.log(this.currentUser)
      this.regEmail = ''
      this.regPassword = ''
      this.loginEmail = ''
      this.loginPassword = ''
      this.$nextTick(() => {
        this.tabIndex = 0
      })
    },
  },
}
</script>

<template>
  {{ tabIndex }}

  <BTabs v-model:index="tabIndex">
    <BTab title="Главная" :disabled="!!currentUser">
      <div class="p-3">
        <h3>Добро пожаловать!</h3>
        <p>Выберите действие:</p>
        <BButton variant="primary" @click="tabIndex = 1">Регистрация</BButton>
        <BButton variant="success" class="ms-2" @click="tabIndex = 2">
          Логин
        </BButton>
      </div>
    </BTab>

    <BTab title="Регистрация" :disabled="!!currentUser">
      <div class="p-3">
        <h4>Регистрация</h4>
        <SignUpSubmitterMigrate @submitted="register" />
      </div>
    </BTab>

    <BTab title="Логин" :disabled="!!currentUser">
      <div class="p-3">
        <h4>Вход</h4>
        <SignInSubmitterMigrate @submitted="login" />
      </div>
    </BTab>

    <BTab title="email" :disabled="!currentUser">
      <div class="p-3">
        <h3 v-if="currentUser">Здравствуйте, {{ currentUser.email }}!</h3>
        <BButton variant="danger" @click="logout">Выйти</BButton>
      </div>
    </BTab>
  </BTabs>
</template>
