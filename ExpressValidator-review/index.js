const express = require('express')
const { query, validationResult, matchedData } = require('express-validator')

const app = express()

app.use(express.json())
app.get(
  '/hello',
  query('person').notEmpty().withMessage('person query không được để trống').escape(),
  (req, res) => {
    const errors = validationResult(req)
    // kiểm tra errors.isEmpty(), isEmpty là lỗi có trống hay không
    // Nếu có lỗi thì có nghĩa là không trống, errors.isEmpty() trả về false
    // Nếu không có lỗi thì là empty, errors.isEmpty() trả về true
    if (errors.isEmpty()) {
      // matchedData sẽ lấy ra những data đã được validate hoặc sanitized bằng express-validator 
      const data = matchedData(req)
      return res.send(`Hello, ${data.person}!`)
    }

    res.status(400).json({ errors: errors.array() })
  }
)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
