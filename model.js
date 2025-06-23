const model = {
  users: [],
  mail: {
    from: '',
    title: '',
    text: '',
  },

  currentUser: {
    id: Math.trunc(Math.random() * 0xff ** 4).toString(16),
    isActive: false,
    email: '',
    password: '',
    firstName: '',
    secondName: '',
    availableAddresses: [],
    mail: {
      incoming: [],
      favorites: [],
      spam: [],
      outcoming: [],
      drafts: [],
      trashCan: [],
    },
  },

  addUser(user) {
    this.users.push(user)
    this.currentUser = user
  },

  loginUser(user) {
    const foundUser = this.users.find(
      u => u.email === user.email && u.password === user.password
    )

    if (foundUser) {
      this.currentUser = foundUser
      this.currentUser.isActive = true
      console.log('Успешный вход')
    } else {
      console.warn('Пожалуйста, зарегистрируйтесь')
    }
  },
  exitUser() {
    this.currentUser.isActive = false
  },

  getMailListByTag(Tag) {
    return this.currentUser[Tag]
  },
  setMailStatusByTag,
  returnMailtoIncome,

  sendMassage,
  replyMassage,
}

// let privet = {
//   email: 'user@example.com',
//   password: '12345',
//   firstName: 'Иван',
//   secondName: 'Иванов',
//   availableAddresses: ['user@example.com'],
// }
// model.addUser(privet)
// console.log(model.users);
// console.log(model.currentUser);
// model.exitUser()
// console.log(model.currentUser)
// model.loginUser(privet)
// console.log(model.currentUser);
