import makeId from '../makeId.js'

const emails = []

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
  emails.push(email)
}

function receiveEmails(recipient) {
  return emails.filter(e => e.recipient === recipient)
}

// read/write
// get/set
// receive/send
// delete/create
// remove/add

export { sendEmail, receiveEmails }

// const email = {
//   id: 1,
//   recipient: 'foo@bar.com',
//   sender: 'baz@bar.com',
//   subject: 'срочно!! ответь!!',
//   text: 'привет, как дела, извини, что напугал',
//   date: 123456789,
// }
