var person = {
    name: 'zs',
    age: 20,
    getInfo: function () {
        return this.name + ' ' + this.age;
    },
    setInfo: function (name) {
        this.name = name;
    }
};
/* 使用方法获取或设置对象的数据 */
console.log(person.getInfo());
person.setInfo('ls');


/* ================================================ */
var person = {
    name: 'zs',
    age: 20,
    get getInfo() {
        return this.name + ' ' + this.age;
    },
    set setInfo(name) {
        this.name = name;
    }
};
/* 使用属性获取或设置对象的数据 */
console.log(person.getInfo);
person.setInfo = 'ls';
