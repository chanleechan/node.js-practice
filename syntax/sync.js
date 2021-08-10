var fs = require('fs');

//readFileSync

// console.log('A');
// var result = fs.readFileSync('syntax/sample.txt','utf8');
// console.log(result);
// console.log('c');

console.log('a');

fs.readFile('syntax/sample.txt','utf-8',function(err,result){
    console.log(result);
});
console.log('c');
