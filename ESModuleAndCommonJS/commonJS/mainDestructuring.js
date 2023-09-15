// Cú pháp import
// Dùng Destructuring để lấy ra 2 func trong utils.js
const { divide, sumFn } = require('./utils.js')

const value = sumFn(1, 2)
console.log('🔥 ~ value:', value)

const value2 = divide(4, 2)
console.log('🔥 ~ value2:', value2)
