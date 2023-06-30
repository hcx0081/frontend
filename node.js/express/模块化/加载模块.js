var m = require('./自定义模块.js');
console.log(m);
// {
//     age: 12,
//     username: 'zs',
//     sayHello: [Function (anonymous)],
//     sayHi: undefined
// }
console.log(m.username);
// zs
console.log(m.sayHello());
// hello
// undefined
console.log(m.sayHi());
// hi
// undefined
console.log(m.world());
// world
// undefined
