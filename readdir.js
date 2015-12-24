var fs = require('fs');

fs.readdir(process.argv[2], function(err, files) {
  if (err) throw err;

  files.forEach(function(file){
    if (file.endsWith('.'+process.argv[3])) {
      console.log(file);
    }
  });
});