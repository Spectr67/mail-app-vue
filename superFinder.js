function findContactsByQuery(query) {
  return findContactsByQueries(queryToArray(query), contacts)
}

function queryToArray(query) {
  return query
    .trim()
    .split(' ')
    .filter(q => q !== '')
}

function findContactsByQueries(queries, contacts) {
  let findedContacts = []
  queries.forEach(query => {
    const result = helper(query, contacts)
    findedContacts.push(result)
  })
  return removeClones(findedContacts.flat())
}

function helper(query, contacts) {
  return contacts.filter(
    contact =>
      compareWords(query, contact.firstName) ||
      compareWords(query, contact.secondName) ||
      compareWords(query, contact.phone)
  )
}

function compareWords(a, b) {
  if (b == null) return false
  return String(b).toLowerCase().includes(a.toLowerCase())
}

const removeClones = arr => Array.from(new Set(arr))

function superFinder(query, contacts) {
  const queries = queryToArray(query)
  const results = findContactsByQueries(queries, contacts)
  return results
}

export default superFinder
