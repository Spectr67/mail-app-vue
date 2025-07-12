// const obj = {
//   top: ['s4', 's8'],
//   bottom: ['s6', 's6'],
// }

// for (const key in obj) {
//   const val = obj[key]
//   key
//   for (const item of val) {
//     item
//   }
// }

const matrix = [
  ['s4', 's8'],
  ['s6', 's6'],
]

for (const row of matrix) {
  row
  for (const col of row) {
    col
  }
}

// числовой матричный скелетон
// проверка на 12 в каждом ряду
