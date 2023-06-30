function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    console.log('!!!');
    return 'ending';
}

var hw = helloWorldGenerator();// Generator {  }
console.log(hw);// Generator {  }
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
// { value: 'hello', done: false }
// { value: 'world', done: false }

// !!!
// { value: 'ending', done: true }
// { value: undefined, done: true }
