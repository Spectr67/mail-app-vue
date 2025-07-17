const obj = {
  x: 42,
  y: 111,
  o: { o: 303 },
}

// const objCopy = { x: 42, y: 111, o: obj.o }

// const objCopy = { ...obj }

const objCopy = structuredClone(obj)

objCopy.o.o = 44

// console.log(objCopy === obj)

// console.log(objCopy.o === obj.o)

console.log(obj.o.o)
