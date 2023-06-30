const plugin = {
    install(Vue, p1, p2) {
        Vue.prototype.sayHi = function () {
            console.log(Vue);
            console.log(p1);
            console.log(p2);
        };
    }
};
export default plugin;

// or
// export default function (Vue, p1, p2) {
//     Vue.prototype.sayHi = function () {
//         console.log(Vue);
//         console.log(p1);
//         console.log(p2);
//     };
// }