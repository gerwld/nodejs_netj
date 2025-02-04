const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
   console.log('request', req.method, req.url);

   // 0. set headers
   res.setHeader('Content-Type', 'text/html');

   // 1. send html file
   fs.readFile('./views/index.html', (err, data) => {
      if (err) console.log(err);
      else res.write(data.toString());
      res.end();
   });
});

server.listen(3000, 'localhost', () => {
   console.log('Listening for requests on http://localhost:3000');
});

//  localhost = loopback ip address 127.0.0.1
