import makeId from '../makeId.js'
import { setAccounts, getAccounts } from './localStorage/accountsStorage.js'

function createAccount(email, password, firstName, lastName) {
  return {
    id: makeId(),
    date: Date.now(),
    email,
    password,
    firstName,
    lastName,
  }
}

function loginAccount(email, password) {
  const accounts = getAccounts()
  return accounts.find(a => a.email === email && a.password === password)
}

function registerAccount(account) {
  const accounts = getAccounts()

  const findedAccount = accounts.find(a => a.email === account.email)
  if (findedAccount) return false

  const acc = createAccount(
    account.email,
    account.password,
    account.firstName,
    account.lastName
  )

  accounts.push(acc)
  setAccounts(accounts)
  return true
}

export { registerAccount, loginAccount }
