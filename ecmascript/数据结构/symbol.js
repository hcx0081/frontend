let obj = {
    [Symbol('name')]: 'zs',
    age: Symbol(),// 不在意其其描述可以赋值为Symbol()
    [Symbol('say')]() {
        console.log('hello');
    }
};
obj[Symbol('sex')] = 'man';
console.log(obj);// { age: Symbol(), [Symbol(name)]: 'zs', [Symbol(say)]: [Function: [say]], [Symbol(sex)]: 'man' }
