import makeId from '../makeId.js'
import { getEmails, setEmails } from './localStorage/emailStorage.js'

function createEmail(sender, recipient, subject, text) {
  return {
    id: makeId(),
    date: Date.now(),
    sender,
    recipient,
    subject,
    text,
  }
}

function sendEmail(sender, recipient, subject, text) {
  const email = createEmail(sender, recipient, subject, text)

  const emails = getEmails()
  emails.push(email)
  setEmails(emails)
}

function receiveIncoming(recipient) {
  const emails = getEmails()
  return emails.filter(e => e.recipient === recipient)
}
function receiveOutcoming(sender) {
  const emails = getEmails()
  return emails.filter(e => e.sender === sender)
}

export { sendEmail, receiveIncoming, receiveOutcoming }
