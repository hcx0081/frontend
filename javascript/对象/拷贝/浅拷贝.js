var src = {
    name: 'zs',
    age: 20,
    hobby: ['sing', 'jump', 'rap'],
    say: function () {
        console.log('hello');
    },
    girl: {
        name: 'ls',
        age: 20
    }
};


var obj = {};
for (var key in src) {
    obj[key] = src[key];
}

obj.name = 'ls';
obj.age = 30;
obj.hobby = [1, 2, 3];
obj.say = 1;

obj.girl.name = 'ww';

console.log(obj);
console.log(src);
