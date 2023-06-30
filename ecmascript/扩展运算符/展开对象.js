var p1 = {name: 'zs'};
var p2 = {age: 20};
var person = {...p1, ...p2, sex: 'man'};
console.log(person);// { name: 'zs', age: 20, sex: 'man' }


var p1 = {name: 'zs', age: 20};
var p2 = {...p1};
console.log(p2);// { name: 'zs', age: 20 }
