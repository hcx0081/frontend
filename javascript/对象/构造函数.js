function Person(name, age) {
    // 如果没有this则是为Window对象添加属性和方法
    /* 实例成员 */
    this.name = name;
    this.age = age;
    this.say = function () {
        console.log('hello');
    };
}

/* 静态成员 */
Person.sex = '男';
console.log(Person.sex);// 男

var person = new Person('zs', 20);
console.log(person.name);// zs
person.say();// hello
console.log(person.sex);// undefined，不可访问静态成员

console.log(person instanceof Person);// true
console.log(person instanceof Object);// true
