// let person = {
//     name: "zs",
//     age: 20,
//     girl: {
//         name: "ls",
//         age: 20
//     }
// };
// let {
//     name,
//     age,
//     girl
// } = person;
// console.log(name);// zs
// console.log(age);// 20
// console.log(girl);// { name: 'ls', age: 20 }
// let {
//     name,
//     ...arr
// } = person;
// console.log(name);// zs
// console.log(arr);// { age: 20, girl: { name: 'ls', age: 20 } }

// let {
//     age: myAge,
//     name: myName,
//     girl: myGirl
// } = person;
// console.log(myName);// zs
// console.log(myAge);// 20
// console.log(myGirl);// { name: 'ls', age: 20 }

// let {
//     name: myName,
//     ...arr
// } = person;
// console.log(myName);// zs
// console.log(arr);// { age: 20, girl: { name: 'ls', age: 20 } }

const {a: myA, b: myB, ...{c: myC}} = {a: 1, b: 2, c: 3};
console.log(myA);
console.log(myB);
console.log(c);
