const p1 = new Promise((resolve) => {
    resolve('hello');
});
const p2 = new Promise((resolve) => {
    resolve('world');
});
Promise.allSettled([p1, p2])
    .then(result => console.log(result))
    .catch(e => console.log(e));
// [
//     { status: 'fulfilled', value: 'hello' },
//     { status: 'fulfilled', value: 'world' }
// ]