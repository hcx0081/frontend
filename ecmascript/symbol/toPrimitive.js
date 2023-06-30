/* 没有提供Symbol.toPrimitive属性 */
const obj1 = {};
console.log(+obj1);// NaN
console.log(`${obj1}`);// [object Object]
console.log(obj1 + '');// [object Object]

/* 提供Symbol.toPrimitive属性 */
const obj2 = {
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return 10;
        }
        if (hint === 'string') {
            return 'hello';
        }
        return true;
    },
};
console.log(+obj2);// 10  hint参数值是number
console.log(`${obj2}`);// hello  hint参数值是string
console.log(obj2 + '');// true  hint参数值是default
