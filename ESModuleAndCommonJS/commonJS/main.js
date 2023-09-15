// Cú pháp import
const utils = require('./utils.js')

// Gọi utils.[name] để gọi function từ utils
// Ở đây mình gọi sumFn nên [name] là sumFn
const value = utils.sumFn(1, 2)
console.log('🔥 ~ value:', value)

// Ở đây mình gọi divide nên [name] là divide
const value2 = utils.divide(4, 2)
console.log('🔥 ~ value2:', value2)
