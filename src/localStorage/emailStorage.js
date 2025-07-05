const emails = []

function setEmails(emails) {
  localStorage.setItem('emails', JSON.stringify(emails))
}

function getEmails() {
  const data = localStorage.getItem('emails')
  return JSON.parse(data)
}
function addEmail(email) {
  const emails = getEmails()
  emails.push(email)
  setEmails(emails)
}

export { getEmails }
