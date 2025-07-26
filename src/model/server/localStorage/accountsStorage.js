function setAccounts(accounts) {
  localStorage.setItem('accounts', JSON.stringify(accounts))
}

function getAccounts() {
  const data = localStorage.getItem('accounts')
  return JSON.parse(data) || []
}

export { setAccounts, getAccounts }
