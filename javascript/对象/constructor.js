function Person() {

}

/*
    使用=赋值方式给原型对象添加属性或方法，只是给原型对象添加新的属性或方法
    此时的prototype还是指向原来的原型对象，所以此时的constructor也还是指向原来的原型对象的构造函数
*/
Person.prototype.say = function () {
    console.log('hello');
};
console.log(Person.prototype);
// Object { say: say(), … }
console.log(Person.prototype.constructor);
// function Person()


/*
    使用字面量方式给原型对象添加属性或方法，会改变整个原型对象
    此时的prototype已经不指向原来的原型对象，所以此时的constructor也不指向原来的原型对象的构造函数，所以必须添加constructor属性以指回原来的原型对象的构造函数
*/
Person.prototype = {
    constructor: Person,
    say: function () {
        console.log('hello');
    }
};
console.log(Person.prototype);
// 添加constructor属性之前：Object { say: say(); }
// 添加constructor属性之后：Object { constructor: Person(), say: say() }
console.log(Person.prototype.constructor);
// 添加constructor属性之前：function Object()
// 添加constructor属性之后：function Person()
