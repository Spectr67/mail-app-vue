import makeId from '../makeId.js'
import { setAccounts, getAccounts } from './localStorage/accountsStorage.js'

function createAccount(emailAddress, password, firstName, lastName) {
  console.log(emailAddress)
  return {
    id: makeId(),
    date: Date.now(),
    emailAddress,
    password,
    firstName,
    lastName,
  }
}

function loginAccount(emailAddress, password) {
  const accounts = getAccounts()
  return accounts.find(
    a => a.emailAddress === emailAddress && a.password === password
  )
}

function registerAccount(account) {
  const accounts = getAccounts()

  const findedAccount = accounts.find(
    a => a.emailAddress === account.emailAddress
  )
  if (findedAccount) return false

  const acc = createAccount(
    account.emailAddress,
    account.password,
    account.firstName,
    account.lastName
  )

  accounts.push(acc)
  setAccounts(accounts)
  return true
}

export { registerAccount, loginAccount }
