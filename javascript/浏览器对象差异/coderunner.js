/* 插件中log和dir一致 */

/* 字面量对象 */
// var obj1 = {};
// console.log(obj1);// {}
// console.dir(obj1);// {}
// console.log(obj1.prototype);// undefined
// console.log(obj1.__proto__);// [Object: null prototype] {}
// console.log(obj1.__proto__.__proto__);// null


/* new对象 */
// var obj2 = new Object();
// console.log(obj2);// {}
// console.dir(obj2);// {}
// console.log(obj2.prototype);// undefined
// console.log(obj2.__proto__);// [Object: null prototype] {}
// console.log(obj2.__proto__.__proto__);// null


/* 构造函数对象 */
// function Person() {
// }
// console.log(Person);// [Function: Person]
// console.dir(Person);// [Function: Person]
// console.log(Person.prototype);// {}
// console.log(Person.prototype.prototype);// undefined
// console.log(Person.prototype.__proto__);// [Object: null prototype] {}
// console.log(Person.prototype.__proto__.__proto__);// null
// console.log(Person.__proto__);// {}
// console.log(Person.__proto__.__proto__);// [Object: null prototype] {}
// console.log(Person.__proto__.__proto__.__proto__);// null

// var per3 = new Person();
// console.log(per3);// Person {}
// console.dir(per3);// Person {}

// console.log(per3.prototype);// undefined
// console.log(per3.__proto__);// {}
// console.log(per3.__proto__.__proto__);// [Object: null prototype] {}
// console.log(per3.__proto__.__proto__.__proto__);// null


/* 命名函数 */
// function fn1() {
// }
// console.log(fn1);// [Function: fn1]
// console.dir(fn1);// [Function: fn1]
// console.log(fn1.prototype);// {}
// console.log(fn1.prototype.prototype);// undefined
// console.log(fn1.prototype.__proto__);// [Object: null prototype] {}
// console.log(fn1.prototype.__proto__.__proto__);// null
// console.log(fn1.__proto__);// {}
// console.log(fn1.__proto__.__proto__);// [Object: null prototype] {}
// console.log(fn1.__proto__.__proto__.__proto__);// null


/* 匿名函数 */
// var fn2 = function () {
// };
// console.log(fn2);// [Function: fn2]
// console.dir(fn2);// [Function: fn2]
// console.log(fn2.prototype);// {}
// console.log(fn2.prototype.prototype);// undefined
// console.log(fn2.prototype.__proto__);// [Object: null prototype] {}
// console.log(fn2.prototype.__proto__.__proto__);// null
// console.log(fn2.__proto__);// {}
// console.log(fn2.__proto__.__proto__);// [Object: null prototype] {}
// console.log(fn2.__proto__.__proto__.__proto__);// null