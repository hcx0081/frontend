// function fn() {
//     return function fn() {
//         console.log(this);// { name: 'zs' }
//     };
// }
// function fn() {
//     return () => {
//         console.log(this);// Window
//     };
// }

// var obj = {
//     name: "zs"
// };
// fn().call(obj);


// var obj = {
//     // say: function () {
//     //     console.log(this);// Object { say: say() }
//     // }
//     say: () => {
//         console.log(this);// Window
//     }
// };
// obj.say();


function Person() {
};
console.log(new Person());// Person {}

var per = function Person() {
};
console.log(new per());// Person {}

var per = function () {
};
console.log(new per());// per {}

var per = () => {
};
console.log(new per());// ❌TypeError: per is not a constructor
