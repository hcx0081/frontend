// const p1 = new Promise((resolve) => {
//     resolve('hello');
// }).then(result => {
//     console.log(result);
//     return result;
// });
// const p2 = new Promise((resolve) => {
//     resolve('world');
// }).then(result => {
//     console.log(result);
//     return result;
// });
// Promise.all([p1, p2])
//     .then(result => console.log(result))
//     .catch(e => console.log(e));
// // hello
// // world
// // ['hello', 'world']


const p1 = new Promise((resolve) => {
    resolve('hello');
});
const p2 = new Promise((resolve) => {
    resolve('world');
});
Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(e => console.log(e));
// ['hello', 'world']
