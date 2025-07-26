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

// read/write
// get/set
// receive/send
// delete/create
// remove/add

export { sendEmail, receiveIncoming, receiveOutcoming }

// const email = {
//   id: 1,
//   recipient: 'foo@bar.com',
//   sender: 'baz@bar.com',
//   subject: 'срочно!! ответь!!',
//   text: 'привет, как дела, извини, что напугал',
//   date: 123456789,
// }
