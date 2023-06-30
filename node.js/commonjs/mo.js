module.exports.name = 'zs';// ✔
module.exports = {// ✔
    name: 'zs'
};

exports.name = 'zs';// ✔
exports = {// ❌因为是引用类型，该方式赋值改变了其内存地址，所以不指向module.exports了
    name: 'zs'
};
