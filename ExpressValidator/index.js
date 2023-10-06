const express = require('express')
const { query, matchedData, validationResult } = require('express-validator')
const app = express()

app.use(express.json())
app.get(
  '/hello',
  query('person').notEmpty().withMessage('Person query is required').escape(),
  (req, res) => {
    const result = validationResult(req)
    console.log(req.query.person)
    if (result.isEmpty()) {
      const data= matchedData(req)
      return res.send(`Hello, ${data.person}!`)
    }

    res.send({ errors: result.array() })
  }
)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
