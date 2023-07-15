/**
 * 深拷贝
 * @param oldObj 源
 * @param newObj 目标
 */
function deepCopy(oldObj, newObj) {
    for (var k in oldObj) {
        var item = oldObj[k];
        /* 判断属性值的数据类型 */
        // 判断属性值是否为数组
        if (item instanceof Array) {
            newObj[k] = [];
            deepCopy(item, newObj[k]);
        }
        // 判断属性值是否为函数
        else if (item instanceof Function) {
            newObj[k] = item;
        } else if (item instanceof Object) {
            // 判断属性值是否为对象
            newObj[k] = {};
            deepCopy(item, newObj[k]);
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
deepCopy(src, obj);

obj.girl.name = 'ww';
console.log(obj);
console.log(src);
