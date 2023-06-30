/* ES6之前 */
// let myName = "zs";
// let mySay = function () {
//     console.log("hello");
// };
// let person = {
//     name: myName,
//     say: mySay,
//     run: function () { }
// };
// person.age = 20;
// console.log(person);

/* ES6 */
let name = 'zs';
let say = function () {
    console.log('hello');
};
let person = {
    name,// 属性名称必须与变量名称相同
    say,// 方法名称必须与变量名称相同
    run() {
    },// 方法可以进行简写
    ['s' + 'e' + 'x']: '男'
};
person['a' + 'g' + 'e'] = 20;// 可以将表达式放入中括号，使用表达式的结果获取或设置属性和方法
console.log(person);
