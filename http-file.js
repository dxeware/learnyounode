var http = require('http');
var fs = require('fs');

server = http.createServer(function(req, res) {

  var readStream = fs.createReadStream(process.argv[3]);

  res.writeHead(200, { 'content-type': 'text/plain' });
  readStream.on('open', function () {
    // This just pipes the read stream to the response object (which goes to the client)
    readStream.pipe(res);
  });

});

server.listen(process.argv[2]);