import { registerAccount, findAccountByEmail } from '../src/shared/accounts.js'
import { login, currentUser, logOut } from '../src/user.js'

registerAccount('vasya@spacemail.com', 'qqq111', 'Vasya', 'Vasilkov')

registerAccount('petya@spacemail.com', 'eee222', 'Petya', 'Petrov')

// console.log(findAccountByEmail('vasya@spacemail.com').passwd === 'qqq111')

let loginSuccess = login('vasya@spacemail.com', 'qqq111')
let loginSuccess2 = login('petya@spacemail.com', 'eee222')
console.log(loginSuccess)
console.log(currentUser)
console.log(loginSuccess2)
console.log(currentUser)
