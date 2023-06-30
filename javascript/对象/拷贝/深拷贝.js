function deepCopy(newObj, oldBbj) {
    for (var k in oldBbj) {
        var item = oldBbj[k];
        /* 判断属性值的数据类型 */
        // 判断属性值是否为数组
        if (item instanceof Array) {
            newObj[k] = [];
            deepCopy(newObj[k], item);
        }
        // 判断属性值是否为函数
        else if (item instanceof Function) {
            newObj[k] = item;
        } else if (item instanceof Object) {
            // 判断属性值是否为对象
            newObj[k] = {};
            deepCopy(newObj[k], item);
        } else {
            // 属于简单数据类型
            newObj[k] = item;
        }
    }
}

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
deepCopy(obj, src);

obj.girl.name = 'ww';
console.log(obj);
console.log(src);
