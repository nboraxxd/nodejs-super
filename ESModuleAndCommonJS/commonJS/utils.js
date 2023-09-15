const sum = (a, b) => a + b
const divide = (a, b) => a / b

// Dùng cú pháp exports.[name] để export
// Ở đây chúng ta export hàm sum với [name] là sumFn
exports.sumFn = sum
// export hàm divide với [name] là divide luôn
exports.divide = divide
