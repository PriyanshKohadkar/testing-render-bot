const http = require('http');

function keepAlive() {
  return new Promise((resolve) => {
    const PORT = process.env.PORT || 10000;
    const server = http.createServer((req, res) => {
      res.writeHead(200);
      res.end('alive');
    });
    server.listen(PORT, '0.0.0.0', () => {
      console.log(`HTTP server running on port ${PORT}`);
      resolve();
    });
  });
}

module.exports = keepAlive;
