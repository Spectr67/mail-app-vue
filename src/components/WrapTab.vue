<script>
import {
  BTabs,
  BTab,
  BButton,
  BButtonGroup,
  BButtonToolbar,
} from 'bootstrap-vue-next'
import SignInSubmitterMigrate from './SignInSubmitter-migrate.vue'
import SignUpSubmitterMigrate from './SignUpSubmitter-migrate.vue'
import WrapVerticalTab from './WrapVerticalTab.vue'
import EmailSubmitterMigrate from './EmailSubmitter-migrate.vue'

export default {
  components: {
    BTabs,
    BTab,
    BButton,
    SignInSubmitterMigrate,
    SignUpSubmitterMigrate,
    WrapVerticalTab,
    BButtonGroup,
    BButtonToolbar,
    EmailSubmitterMigrate,
  },
  emits: ['register', 'login', 'logout', 'getemail', 'emailSubmitted'],
  props: ['currentUser', 'incoming', 'outcoming'],
  data() {
    return {
      tabIndex: 0,
      title: this.currentUser,
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
      this.$nextTick(() => {
        this.tabIndex = 0
      })
    },
    emailSubmitted(email) {
      this.$emit('emailSubmitted', email)
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
        <div>
          <BButtonToolbar justify aria-label="Toolbar with justify">
            <BButtonGroup class="mx-1">
              <BButton @click="$emit('open-email-form')">New</BButton>
              <BButton @click="$emit('getemail')">Get mail</BButton>
              <BButton v-if="currentUser">{{ currentUser.firstName }}</BButton>
            </BButtonGroup>
            <BButtonGroup class="mx-1">
              <BButton>Save</BButton>
              <BButton variant="danger" @click="logout">Выйти</BButton>
            </BButtonGroup>
          </BButtonToolbar>
        </div>
        <WrapVerticalTab :incoming="incoming" :outcoming="outcoming" />
      </div>
    </BTab>
    <BTab title="Email" :disabled="!currentUser">
      <div class="p-3">
        <EmailSubmitterMigrate @submitted="emailSubmitted" />
      </div>
    </BTab>
  </BTabs>
</template>
