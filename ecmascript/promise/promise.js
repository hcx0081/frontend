// const promise = new Promise(function (fulfill, reject) {
//     // ... some code

//     if (/* 异步操作成功 */) {
//         fulfill(value);// 改变该Promise对象为成功状态，调用成功状态的函数
//     } else {
//         reject(reason);// 改变该Promise对象为失败状态，调用失败状态的函数
//     }
// });


/* 链式调用 */
function timeout(ms) {
    return new Promise((resolve) => {
        console.log(1);
        setTimeout(resolve, ms, 'done');
    });
}

timeout(0).then((data) => {
    console.log(data);
});
console.log(2);// 会先执行，因为Promise是异步的
// 1
// 2
// done


new Promise((resolve) => {
    resolve(1);// 会后执行，因为Promise终究是异步的
    // return resolve(1);// 一般直接return
    console.log('Promise');
}).then(data => {
    console.log(data);// 会后执行，因为Promise终究是异步的
    return ++data;// 成功状态的回调函数的返回值（非Promise对象），可以作为链式调用中下一个Promise的成功状态的回调函数的参数
}).then(data => {// 如果上一个Promise的成功状态的回调函数没有返回值，这里的data为undefined
    console.log(data);// 会后执行，因为Promise终究是异步的
});
console.log('同步代码1');
console.log('同步代码2');
// Promise
// 同步代码1
// 同步代码2
// 1
// 2
