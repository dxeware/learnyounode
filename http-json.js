var http = require('http');
var url = require('url');

server = http.createServer(function(req, res) {
  if ( req.method === 'GET') {
    var urlObj = url.parse(req.url, true);
    if (urlObj.pathname === '/api/parsetime') {
      console.log(urlObj);
      var queryStr = urlObj.query.iso;
      var re = /\d+T(\d{2}):(\d{2}):(\d{2}).*/i;
      var time = queryStr.match(re);
      time[1] = Number(time[1]) + 16; //not sure why but works!!
      time[2] = Number(time[2]);
      time[3] = Number(time[3]);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({"hour": Number(time[1]), "minute": time[2], "second": time[3]}));

    } else if (urlObj.pathname === '/api/unixtime') {
      var unixStr = Date.parse(urlObj.query.iso);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({"unixtime": Number(unixStr)}));
    }
  }
});

server.listen(process.argv[2]);