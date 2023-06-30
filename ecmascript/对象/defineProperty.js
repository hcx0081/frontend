var person = {
    name: 'zs',
    age: 20
};
Object.defineProperty(person, 'info', {
    enumerable: true,
    get() {
        return '姓名：' + this.name;
    },
    set(param) {
        this.age = param + '岁';
    }
});
console.log(person.info);// 姓名：zs

person.info = 20;
console.log(person.age);// 20岁


var per = {
    name: 'ls'
};
Object.defineProperty(per, 'age', {
    value: 20
});
