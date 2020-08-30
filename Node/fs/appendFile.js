var fs = require('fs');
fs.appendFile('myFile.txt', 'Hello World!', function (err) {
  if (err) throw err;
  console.log("saved");
});
