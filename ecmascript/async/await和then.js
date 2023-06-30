// new Promise((resolve) => {
//     resolve("成功");
// }).then((data) => {
//     console.log(data);
// });
// // 等同于
// let pro = new Promise((resolve) => {
//     resolve("成功");
// });
// async function as() {
//     let p = await pro;
//     console.log(p);
// }
// as();


new Promise((resolve, reject) => {
    reject('失败');
}).catch((reason) => {
    console.log(reason);
});
// 等同于
let pro = new Promise((resolve, reject) => {
    reject('失败');
});

async function as() {
    try {
        var p = await pro;
        console.log(p);// 执行不到这里
    } catch (error) {
        console.log(error);
    }
}

as();
// 失败
