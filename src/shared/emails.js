import makeId from '../makeId.js'

const emails = []

function createEmail(recipient, sender, subject, text) {
  return {
    id: makeId(),
    date: Date.now(),
    recipient,
    sender,
    subject,
    text,
  }
}

function addEmail(recipient, sender, subject, text) {
  const email = createEmail(recipient, sender, subject, text)
  emails.push(email)
}

export { addEmail }

// const email = {
//   id: 1,
//   recipient: 'foo@bar.com',
//   sender: 'baz@bar.com',
//   subject: 'срочно!! ответь!!',
//   text: 'привет, как дела, извини, что напугал',
//   date: 123456789,
// }
