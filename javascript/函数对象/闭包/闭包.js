/* 不太灵活的闭包写法 */
function fun() {
    var num = 0;

    /* fn为闭包 */
    function fn() {
        console.log(++num);
    }

    fn();
}

fun();// 1
fun();// 1


/* 灵活的闭包写法 */
function fun() {
    var num = 0;

    /* fn为闭包 */
    function fn(number) {
        console.log(++num + number);
    }

    return fn;
}

fun()(1);// 2
fun()(1);// 2


/* 自调用函数写法 */
var f = (function fun() {
    var num = 0;

    /* fn为闭包 */
    function fn(number) {
        console.log(++num + number);
    }

    return fn;
});
// 不同的fun，所以都是不同的fn
f()(1);// 2
f()(1);// 2

var f = (function fun() {
    var num = 0;

    /* fn为闭包 */
    function fn(number) {
        console.log(++num + number);
    }

    return fn;
})();
// 同一个fun，所以都是同一个fn
f(1);// 2
f(1);// 3
