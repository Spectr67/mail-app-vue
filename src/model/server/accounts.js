import makeId from '../makeId.js'

const accounts = []

function createAccount(email, passwd, firstName, lastName) {
  return {
    id: makeId(),
    date: Date.now(),
    email,
    passwd,
    firstName,
    lastName,
  }
}

function loginAccount(email, passwd) {
  return accounts.find(a => a.email === email && a.passwd === passwd)
}

function registerAccount(email, passwd, firstName, lastName) {
  const findedAccount = accounts.find(a => a.email === email)
  if (findedAccount) return false
  const account = createAccount(email, passwd, firstName, lastName)
  accounts.push(account)
  return true
}

export { registerAccount, loginAccount }

// const account = {
//   id: 1,
//   email: 'foo@bar.com',
//   passwd: 'qwerty123',
//   firstName: 'Petya',
//   lastName: 'Petrov',
//   date: 123456789,
// }
