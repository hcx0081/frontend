module.exports = {
    age: 12
};
//设置username为共享成员
module.exports.username = 'zs';
//设置sayHello为共享成员
module.exports.sayHello = function () {
    console.log('hello');
};

function sayHi() {
    console.log('hi');
}

module.exports.sayHi = sayHi;

var world = function () {
    console.log('world');
};

module.exports.world = world;
