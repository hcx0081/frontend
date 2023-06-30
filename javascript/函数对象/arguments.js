function fn() {
    console.log(arguments);// Arguments { 0: "zs", 1: "ls", 2: "ww", … }
    console.log(typeof arguments);// object

    console.log(arguments.callee);// function fn()
}

fn('zs', 'ls', 'ww');
