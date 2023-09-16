import express from 'express'

const app = express()
const port = 3000

const sum = (obj: { a: number; b: number }) => {
  return obj.a + obj.b
}

app.get('/', (_req, res) => {
  const value = sum({ a: 1, b: 2 })
  res.send(`Hello World! ${value}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
