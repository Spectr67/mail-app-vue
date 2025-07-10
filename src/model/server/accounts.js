import makeId from '../makeId.js'
import { getAccounts } from './localStorage/accountsStorage.js'

// const accounts = []

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

function loginAccount(email, passwd, accounts) {
  return accounts.find(a => a.email === email && a.passwd === passwd)
  // getAccounts()
}

function registerAccount(account, accounts) {
  const findedAccount = accounts.find(a => a.email === account.email)
  // const accounts = [] // getAccounts()

  if (findedAccount) return false
  const acc = createAccount(
    account.email,
    account.passwd || account.password,
    account.firstName,
    account.lastName
  )
  accounts.push(acc)
  // setAccounts(acc)
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
