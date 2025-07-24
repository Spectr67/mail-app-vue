import makeId from '../makeId.js'
import { setAccounts, getAccounts } from './localStorage/accountsStorage.js'

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
function loginAccount(email, passwd) {
  const accounts = getAccounts()
  return accounts.find(a => a.email === email && a.passwd === passwd)
}

function registerAccount(account) {
  const accounts = getAccounts()

  const findedAccount = accounts.find(a => a.email === account.email)
  if (findedAccount) return false

  const acc = createAccount(
    account.email,
    account.passwd || account.password,
    account.firstName,
    account.lastName
  )

  accounts.push(acc)
  setAccounts(accounts)
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
