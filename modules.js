var fs = require('fs');

function dirFiles(dirname, ext, callback) {
  var arr = [], error = null; 

  fs.readdir(dirname, function(err, files) {
    if (err) {
      error = err;
    } else {
      arr = files.filter(function(file){
        if (file.endsWith('.' + ext)) {
          return file;
        }
      });
    }
    callback(error, arr);
  });
}

module.exports = dirFiles;