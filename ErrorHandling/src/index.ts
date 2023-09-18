import express from 'express'
import { sum } from '@/utils'

const app = express()
const port = 3000

app.get('/', (_req, res) => {
  const data = { a: 1, b: 2 }
  const value = sum(data)
  res.send(`Hello World! ${value}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
