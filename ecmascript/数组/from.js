function fn() {
    var arr = [].slice.call(arguments);
    var arr = Array.from(arguments);
    console.log(arr);// Array(3) [ 1, 2, 3 ]

    console.log([...arguments]); // Array(3) [ 1, 2, 3 ]
}

fn(1, 2, 3);
