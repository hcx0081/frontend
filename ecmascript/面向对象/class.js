class Person {
    /* 构造方法 */
    constructor(name, age) {
        /* 实例属性 */
        this.name = name;
        this.age = age;

        this.run = function () {
            console.log('run');
        };
    }

    /* 静态属性 */
    static sex = 'man';

    /* 实例方法 */
    say() {
        console.log(this.name);// 直接使用name会报错，因为Window对象没有该属性
    }

    /* 静态方法 */
    static sleep() {
        console.log('sleep');
    }
}

var per = new Person('zs', 20);
console.log(per.name);// zs
console.log(per.age);// 20
per.say();// zs
per.run();
Person.sleep();// sleep


var per2 = new Person('li', 20);
console.log(per2.say == per.say);// true，类中的所有方法都是共享方法
console.log(per2.run == per.run);// false，定义在类的构造函数中的所有方法不是共享方法


class Son extends Person {
    constructor(name, age) {
        super(name, age);
    }
}

var son = new Son();
console.log(son);
