const PORT = 4000;
// Đây là module có sẵn dùng để tạo server Node.js
const http = require('http');
console.log(http);

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end('{"message": "Hello world"}');
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
