function* demo() {
    console.log('Hello' + (yield));
    yield 123;
    console.log('world' + (yield 456));
}

var de = demo();
console.log(de.next());
// { value: undefined, done: false }
console.log(de.next(0));
// Hello0
// { value: 123, done: false }
console.log(de.next(1));// 此处传参没什么作用，因为没有代码需要yield的返回值
// { value: 456, done: false }
console.log(de.next(2));
// world2
// { value: undefined, done: true }
