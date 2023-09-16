// Lấy express từ trong require express ra
const express = require('express')
// Gọi express function và gắn vào biến app
const app = express()
const port = 3000

// Khai báo router
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hi', (req, res) => {
  res.send('Xin chào thế giới!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})