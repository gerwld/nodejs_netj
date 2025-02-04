const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
   console.log('request', req.method, req.url);

   // 0. set headers
   res.setHeader('Content-Type', 'text/html');

   // path
   let path = './views/';

   switch(req.url) {
    case '/':
        path += 'index.html'
        res.statusCode = 200;
        break; 
    case '/about':
        path += 'about.html'
        res.statusCode = 200;
        break;
    case '/about-me':
        res.setHeader('Location', '/about');
        res.statusCode = 301;
        break;
    default:
        path += '404.html';
        res.statusCode = 404;
        break;
   }

   // 1. send html file
   fs.readFile(path, (err, data) => {
      if (err) console.log(err);
      else res.write(data.toString());
      res.end();
   });
});

server.listen(3000, 'localhost', () => {
   console.log('Listening for requests on http://localhost:3000');
});

//  localhost = loopback ip address 127.0.0.1
