var http = require('http');

// http.get(process.argv[2], function(res) {
//   var arrOfStrings = [];
//   var string = '';
//   res.setEncoding('utf8');
//   res.on('data', function(data){
//     string += data;
//   });
//   res.on('end', function(){
//     arrOfStrings.push(string);
//     string = '';
//     http.get(process.argv[3], function(res) {
//       res.setEncoding('utf8');
//       res.on('data', function(data){
//         string += data;
//       });
//       res.on('end', function(){
//         arrOfStrings.push(string);
//         string = '';
//         http.get(process.argv[4], function(res) {
//           res.setEncoding('utf8');
//           res.on('data', function(data){
//             string += data;
//           });
//           res.on('end', function(){
//             arrOfStrings.push(string);
//             arrOfStrings.forEach(function(str) {
//               console.log(str);
//             });
//           });
//         });
//       });
//     });

//   });
// });

var arrOfStrings = [];

function httpGet(index) {
  var string = '';
  http.get(process.argv[2 + index], function(res) {
    res.setEncoding('utf8');
    res.on('data', function(data){
      string += data;
    });
    res.on('end', function(){
      arrOfStrings[index] = string;
      if (index === 2) {
        arrOfStrings.forEach(function(str) {
          console.log(str);
        });
      }
    });
  });
}

for (var i = 0; i < 3; i++) {
  httpGet(i);
};
