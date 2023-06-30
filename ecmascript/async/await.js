const pro1 = new Promise((resolve) => {
    resolve('成功');
});
const pro2 = new Promise((resolve, reject) => {
    reject('失败');
});

async function p() {
    var p1 = await pro1;
    console.log(p1);

    var p2 = await pro2;
    console.log(p2);
}

p();
