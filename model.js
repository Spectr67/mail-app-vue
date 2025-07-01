const model = {
  users: [],
  mail: {
    isEditable: false,
    from: '',
    to: '',
    title: '',
    text: '',
    date: '',
    id: 0,
  },

  currentUser: {
    id: Math.trunc(Math.random() * 0xff ** 4).toString(16),
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

  registerateUser(user) {
    this.users.push(user)
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
  // setMailStatusByTag,
  // returnMailtoIncome,

  // sendMassage,
  // replyMassage,
}

let privet = {
  email: 'user@example.com',
  password: '12345',
  firstName: 'Иван',
  secondName: 'Иванов',
}
let privet231 = {
  email: 'u3424ser@example.com',
  password: '12345',
  firstName: 'Ив124ан',
  secondName: 'Ивано214в',
}
model.registerateUser(privet)
model.registerateUser(privet231)
console.log(model.users)
console.log(model.currentUser)
model.exitUser()
console.log(model.currentUser)
model.loginUser(privet)
console.log(model.currentUser)
