let obj1 = {a: 1, b: 2};
let obj2 = {a: 1, b: 2, c: 3};
let obj = {};
Object.assign(obj, obj1, obj2);
console.log(obj);
