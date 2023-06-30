/* 1s以后输出1，输出1以后过2s输出2，输出2以后过3s输出3 */
// 回调地狱
// setTimeout(() => {
//     console.log(1);

//     setTimeout(() => {
//         console.log(2);

//         setTimeout(() => {
//             console.log(3);
//         }, 3000);

//     }, 2000);
// }, 1000);


// Generator函数
// function one() {
//     setTimeout(() => {
//         console.log(1);
//         g.next();
//     }, 1000);
// }
// function two() {
//     setTimeout(() => {
//         console.log(2);
//         g.next();
//     }, 2000);
// }
// function three() {
//     setTimeout(() => {
//         console.log(3);
//     }, 3000);
// }
// function* gen() {
//     yield one();
//     yield two();
//     yield three();
// };

// let g = gen();
// g.next();


// async函数
function one() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    }).then(value => {
        console.log(value);
    });
}

function two() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2);
        }, 2000);
    }).then(value => {
        console.log(value);
    });
}

function three() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(3);
        }, 3000);
    }).then(value => {
        console.log(value);
    });
}

async function as() {
    await one();
    await two();
    await three();
};
as();
