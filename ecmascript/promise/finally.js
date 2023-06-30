console.log(new Promise(resolve => {
    resolve(1);
}).then((data) => {
    return data;
}));// Promise对象的value是1


// resolve() -> Promise对象的value是undefined
Promise.resolve(2).then(() => {
}, () => {
});

// resolve() -> Promise对象的value是2
Promise.resolve(2).finally(() => {
});

// reject() -> Promise对象的reason是undefined
Promise.reject(3).then(() => {
}, () => {
});

// reject() -> Promise对象的reason是3
Promise.reject(3).finally(() => {
});
