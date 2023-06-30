// let say = function () {
//   return "hello";
// };

// let say = w => "hello" + w;
// console.log(say());

// let say = () => { name: "zs"; };
// console.log(say());// undefined

let say = () => ({name: 'zs'});
console.log(say());// { name: 'zs' }


var func = (x, y) => x + y;
console.log(func(1, 2));
