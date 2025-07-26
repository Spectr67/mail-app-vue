import makeId from '../makeId.js'
import {
  getIncoming,
  getOutcoming,
  setIncoming,
  setOutcoming,
} from './localStorage/emailStorage.js'

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

  const outList = getOutcoming()
  outList.push(email)
  setOutcoming(outList)

  const inList = getIncoming()
  inList.push(email)
  setIncoming(inList)
}

function receiveEmails(recipient) {
  return receiveIncoming(recipient).concat(receiveOutcoming(recipient))
}

function receiveIncoming(recipient) {
  const emails = getIncoming()
  return emails.filter(e => e.recipient === recipient)
}
function receiveOutcoming(recipient) {
  const emails = getOutcoming()
  return emails.filter(e => e.recipient === recipient)
}

// read/write
// get/set
// receive/send
// delete/create
// remove/add

export { sendEmail, receiveEmails, receiveIncoming, receiveOutcoming }

// const email = {
//   id: 1,
//   recipient: 'foo@bar.com',
//   sender: 'baz@bar.com',
//   subject: 'срочно!! ответь!!',
//   text: 'привет, как дела, извини, что напугал',
//   date: 123456789,
// }
