const accounts = []

function setAccounts(users) {
  localStorage.setItem('users', JSON.stringify(users))
}

function getAccounts() {
  const data = localStorage.getItem('users')
  return JSON.parse(data)
}

function addAccount(account) {
  const accounts = getAccounts()
  accounts.push(account)
  setAccounts(accounts)
}
