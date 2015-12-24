var http = require('http');

http.get(process.argv[2], function(res) {
  var string = '', numChars = 0;
  res.setEncoding('utf8');
  res.on('data', function(data){
    string += data;
    numChars += data.length;
  });
  res.on('error', function(err){
    console.log('Got error: ', err.message);
  }); 
  res.on('end', function(){
    console.log(numChars); 
    console.log(string); 
  });
});
