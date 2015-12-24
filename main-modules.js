var dirFiles = require('./modules');

dirFiles(process.argv[2], process.argv[3], function(err, data) {
  if (err) {
    console.log("Error occurred....");
  } else {
    data.forEach(function(file) {
      console.log(file);
    });
  }
})