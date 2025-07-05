import makeId from '../makeId.js'
import { getAccounts } from './localStorage/accountsStorage.js'

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
  // getAccounts()
}

function registerAccount(email, passwd, firstName, lastName) {
  const findedAccount = accounts.find(a => a.email === email)
  // const accounts = [] // getAccounts()

  if (findedAccount) return false
  const account = createAccount(email, passwd, firstName, lastName)
  accounts.push(account)
  // setAccounts(accounts)
  console.log(accounts)
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
