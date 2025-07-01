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

function findAccountByEmail(email) {
  return accounts.find(a => a.email === email)
}

function registerAccount(email, passwd, firstName, lastName) {
  const findedAccount = findAccountByEmail(email)
  if (findedAccount) return
  const account = createAccount(email, passwd, firstName, lastName)
  accounts.push(account)
}

export { registerAccount, findAccountByEmail }

// const account = {
//   id: 1,
//   email: 'foo@bar.com',
//   passwd: 'qwerty123',
//   firstName: 'Petya',
//   lastName: 'Petrov',
//   date: 123456789,
// }
