const makeId = () => ((Math.random() * 0xffff_ffff) >>> 0).toString(16)
export default makeId
