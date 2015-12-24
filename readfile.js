var fs = require('fs');

var fileString = fs.readFileSync(process.argv[2], 'utf8');

var stringArr = fileString.split('\n');

console.log(stringArr.length-1);

stringArr.forEach(function(arr) {
  console.log(arr);
});