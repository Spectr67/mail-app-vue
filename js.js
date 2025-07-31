const struct = {
  email: {
    col: 's12',
    caption: 'Ваш email',
    data: 42,
    component: 'MInput',
  },
  login: {
    col: 's6',
    caption: 'Ваш логин',
    data: 101,
    component: 'MInput',
  },
  password: {
    col: 's6',
    caption: 'Ваш пароль',
    data: 333,
    component: 'MInput',
  },
  text: {
    col: 's6',
    caption: 'Ваш текст',
    data: 1111,
    component: 'MTextarea',
  },
}

const result = {}

for (const key in struct) {
  result[key] = struct[key].data
}

result

let result2 = Object.entries(struct)
result2

let result3 = result2.map(r => ({ [r[0] + '!']: r[1].data }))
result3

let result4 = result2.map(r => [r[0] + '!', r[1].data])
result4

let result5 = result2.map(([key, val]) => [key, val.data])
result5

let result6 = result2.map(([key, { data }]) => [key, data])
result6

let result7 = Object.fromEntries(result6)
result7

let r = Object.fromEntries(
  Object.entries(struct).map(([key, { data }]) => [key, data])
)

r

//

// let [key, val] = [42, 101]
// key
// val

let sourceArray = [42, { x: 101 }]
let [key, { x }] = sourceArray
key
x
