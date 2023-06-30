let person = {
    name: 'zs',
    age: 20
};

let proxy = new Proxy(person, {
    // 拦截读取属性
    get(target, prop) {
        return Reflect.get(target, prop);
    },
    // 拦截设置属性或添加属性
    set(target, prop, value) {
        return Reflect.set(target, prop, value);
    },
    // 拦截删除属性
    deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
});
proxy.name = 'ls';
console.log(proxy);
