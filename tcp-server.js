'use strict';

var net = require('net');

var server = net.createServer(function (socket) {
  var dateStr = '';
  var date = new Date();
  var month = parseInt(date.getMonth() + 1);
  dateStr += date.getFullYear() + '-' + 
    month + '-' + date.getDate() +
    ' ' + date.getHours() + ':' + date.getMinutes();
  socket.end(dateStr);
});

var port = process.argv[2];
server.listen(port);
