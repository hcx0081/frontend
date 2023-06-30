function fn(name, age) {
    console.log(this, name, age);
}

var person = new Object();

fn.call(person, 'zs', 20);// Object {  } zs 20
fn.apply(person, ['zs', 20]);// Object {  } zs 20

var arr = [1, 2, 3];
var arr1 = [1, 2, 3];
console.log(Math.max.apply(Math, arr));// 3
console.log(Math.max(arr));// 3
