let obj = {
    /* 方式一 */
    // [Symbol.iterator]: function* () {
    //     yield 'hello';
    //     yield 'world';

    /* 方式二 */
    * [Symbol.iterator]() {
        yield 'hello';
        yield 'world';
    }

};
for (let val of obj) {
    console.log(val);
}
// hello
// world
console.log(...obj);// hello world
