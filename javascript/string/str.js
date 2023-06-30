var str = 'hello';
console.log(typeof str);// string
console.log(str instanceof String);// false

var str = new String('hello');
console.log(typeof str);// object
console.log(str instanceof String);// true