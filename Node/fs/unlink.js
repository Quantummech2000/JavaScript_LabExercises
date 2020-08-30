var fs = require('fs');

fs.unlink('myFile.txt', function(err){
  if(err) throw err;
  console.log("Deleted File Successfully");
});
