const obj = { x: 42 }

const proxy = new Proxy(obj, {})

// console.log(proxy instanceof Proxy)

// const againObj = Object.fromEntries(Object.entries(proxy))

const cloneObj = structuredClone({ ...proxy })

// console.log(cloneObj)
