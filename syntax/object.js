//배열
var members = ['chan','lee','hee'];
console.log(members[1]);

var i = 0;
while(i<members.length){
    console.log('array loop', members[i]);
    i = i +1;
}
//객체
var roles = {
    //kdy, value
    'programmer ':'chen',
    'designer':'lee',
    'manager':'hee'
}

console.log(roles['designer']);

for(var name in roles){
    console.log('object = >',name,'value = >',roles[name]);
}

