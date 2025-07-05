import { getAccounts } from './accountsStorage'
import { getEmails } from './emailStorage'

function isRegistrated(account) {
  const accounts = getAccounts()
  return accounts.some(acc => acc.email === account.email)
}

function getAccountEmail(account) {
  return getEmails().includes(account.email)
}
