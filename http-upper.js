var http = require('http');

server = http.createServer(function(req, res) {
  if (req.method === 'POST') {
    var body = '';
    req.on('data', function (chunk) {
      body += chunk.toString().toUpperCase();
    });
    req.on('end', function() {
      res.writeHead(200, { 'content-type': 'text/plain' });
      res.end(body);
    });
  }
});

server.listen(process.argv[2]);