import { findAccountByEmail } from './shared/accounts.js'
import { addEmail } from './shared/emails.js'

let currentUser
let incoming

function login(email, passwd) {
  const findedAccount = findAccountByEmail(email)
  if (findedAccount?.passwd === passwd) {
    currentUser = findedAccount
    return true
  }
  return false
}

function logOut() {
  currentUser = null
}

function sendEmail(recipient, subject, text) {
  addEmail(recipient, currentUser.email, subject, text)
}
function getEmail(sender, subject, text) {
  let email = addEmail(sender, currentUser.email, subject, text)
  incoming.push(email)
}

function sortEmail(type, email) {
  incoming.remove(email)
  type.push(email)
}

export { login, currentUser, sendEmail, logOut }
