var fs = require('fs');
fs.readFile('sample.txt','utf-8',function(err,date){
    console.log(date);
})