import { loginAccount, registerAccount } from './src/model/server/accounts.js'
import { receiveEmails, sendEmail } from './src/model/server/emails.js'

let onlineAccountA
let onlineAccountB
let inboxA = []
let inboxB = []

function loginA(email, password) {
  onlineAccountA = loginAccount(email, password)
}
function loginB(email, password) {
  onlineAccountB = loginAccount(email, password)
}

function sendA(recipient, subject, text) {
  sendEmail(onlineAccountA.email, recipient, subject, text)
}
function sendB(recipient, subject, text) {
  sendEmail(onlineAccountB.email, recipient, subject, text)
}

function receiveA() {
  inboxA = receiveEmails(onlineAccountA.email)
}
4
function receiveB() {
  inboxB = receiveEmails(onlineAccountB.email)
}

registerAccount('vasya@spacemail.com', 'qqq111', 'Vasya', 'Vasilkov')
registerAccount('petya@spacemail.com', 'eee222', 'Petya', 'Petrov')

loginA('vasya@spacemail.com', 'qqq111')
loginB('petya@spacemail.com', 'eee222')

console.log(onlineAccountA)
console.log(onlineAccountB)

sendA('petya@spacemail.com', 'hi', 'hello')
sendB('vasya@spacemail.com', 'hi', 'hello')

receiveB()
receiveA()
console.log(inboxB)
console.log(inboxA)
