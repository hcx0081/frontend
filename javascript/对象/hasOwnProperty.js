function Person() {
}

var person = new Person();

// person.name = "zs";
person.__proto__.name = 'zs';

console.log('name' in person);// true
console.log(person.hasOwnProperty('name'));// false

console.log(person.hasOwnProperty('hasOwnProperty'));// false
console.log(person.__proto__.hasOwnProperty('hasOwnProperty'));// false
console.log(person.__proto__.__proto__.hasOwnProperty('hasOwnProperty'));// true
