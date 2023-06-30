function Father(name, age) {
    // this指向父构造函数的实例对象
    this.name = name;
    this.age = age;
}

Father.prototype.say = function () {
    console.log('hello');
};

function Son(name, age, sex) {
    // this指向子构造函数的实例对象
    Father.call(this, name, age);
    this.sex = sex;
}

// Son.prototype = Father.prototype;// ❌
Son.prototype = new Father();
// Son.prototype.constructor = Son;// 需要指回原来的构造函数，因为上面的操作改变了整个原型对象，原型对象指向了父实例对象

Son.prototype.exam = function () {
    console.log('I don\'t like!');
};

console.log(Father.prototype);
/*
    赋值为父构造函数的原型对象：Object { say: say(), exam: exam(), … }
    赋值为父构造函数的实例对象：Object { say: say(), … }
*/
console.log(Son.prototype);
/*
    赋值为父构造函数的原型对象：Object { say: say(), exam: exam(), … }
    赋值为父构造函数的实例对象：Object { name: undefined, age: undefined, exam: exam() }
*/
console.log(new Son());
