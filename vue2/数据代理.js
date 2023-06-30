var obj1 = {
    name: 'zs'
};
var obj2 = {};

Object.defineProperty(obj2, 'name', {
    get() {
        return obj1.name;
    },
    set(v) {
        obj1.name = v;
    }
});
