function setEmails(emails) {
  localStorage.setItem('emails', JSON.stringify(emails))
}

function getEmails() {
  const data = localStorage.getItem('emails')
  return JSON.parse(data) || []
}

export { setEmails, getEmails }
