// function Person() {
//     // 如果没有this则是为Window对象添加属性和方法
//     this.say = function () {
//         console.log('hello');
//     };
// }
// var person1 = new Person();
// var person2 = new Person();

// /* 方法对象不是同一个对象 */
// console.log(person1.say == person2.say);// false


/* ======================================================================= */
// function Person() {
//     // 如果没有this则是为Window对象添加属性和方法
//     this.say = sayHello;
// }
// // 将方法抽取出来
// function sayHello() {
//     console.log('hello');
// };

// var person1 = new Person();
// var person2 = new Person();

// /* 方法对象是同一个对象 */
// console.log(person1.say == person2.say);// true


/* ======================================================================= */
function Person() {
}

var person1 = new Person();
var person2 = new Person();

/* 将方法添加到原型对象中 */
Person.prototype.say = function () {
    console.log('hello');
};
// person1.__proto__.say = function () {
//     console.log('hello');
// };

console.log(person1.__proto__);
console.log(person2.__proto__);
console.log(new Person().__proto__);
console.log(Person.prototype);

console.log(person1.__proto__ == person2.__proto__);// true
console.log(new Person().__proto__ == Person.prototype);// true
console.log(person1.__proto__ == new Person().__proto__);// true

/* 方法对象是同一个对象 */
console.log(person1.say == person2.say);// true
