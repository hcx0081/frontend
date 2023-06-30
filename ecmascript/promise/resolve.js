new Promise((resolve) => resolve());
// 等同于
Promise.resolve();

new Promise((resolve) => resolve('hello')).then(data => {
    console.log(data);// hello
});
// 等同于
Promise.resolve('hello').then(data => {
    console.log(data);// hello
});


/* 具有then()方法的对象 */
let thenable = {
    then: function (resolve) {
        console.log('thenable');
        resolve(1);
    }
};
let p1 = Promise.resolve(thenable);// thenable
p1.then(function (data) {
    console.log(data);// 1
});
// thenable
// 1
