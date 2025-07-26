function setIncoming(incoming) {
  localStorage.setItem('incoming', JSON.stringify(incoming))
}
function setOutcoming(outcoming) {
  localStorage.setItem('outcoming', JSON.stringify(outcoming))
}

function getIncoming() {
  const data = localStorage.getItem('incoming')
  return JSON.parse(data) || []
}
function getOutcoming() {
  const data = localStorage.getItem('outcoming')
  return JSON.parse(data) || []
}

export { setIncoming, setOutcoming, getIncoming, getOutcoming }
