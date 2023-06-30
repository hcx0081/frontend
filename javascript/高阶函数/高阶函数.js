function fn(callback) {
    // 如果callback是个函数则调用
    callback && callback();
}

fn(function () {
    console.log('hello');// hello
});


function fn() {
    return function () {
        console.log('hello');
    };
}

// 第一个括号表示返回函数对象，第二个括号表示调用函数
fn()();// hello
